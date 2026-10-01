import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = resolve(root, "catalog/coding-challenges.json");
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));

function splitTopLevel(input) {
  const parts = [];
  let current = "";
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (const char of input) {
    if (quote) {
      current += char;
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = "";
      continue;
    }
    if (char === "\"" || char === "'") { quote = char; current += char; continue; }
    if ("([{".includes(char)) depth += 1;
    else if (")] }".replace(" ", "").includes(char)) depth -= 1;
    if (char === "," && depth === 0) { parts.push(current.trim()); current = ""; }
    else current += char;
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function parseLiteral(raw) {
  const value = raw.trim().replace(/;\s*$/, "");
  if (!value) return { ok: false };
  if (value === "undefined") return { ok: true, value: { $undefined: true } };
  if (value === "null") return { ok: true, value: null };
  if (value === "true") return { ok: true, value: true };
  if (value === "false") return { ok: true, value: false };
  if (/^[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?$/i.test(value)) return { ok: true, value: Number(value) };
  if (value.startsWith("\"") && value.endsWith("\"")) { try { return { ok: true, value: JSON.parse(value) }; } catch {} }
  if (value.startsWith("'") && value.endsWith("'")) {
    try { return { ok: true, value: JSON.parse(`"${value.slice(1, -1).replace(/\\'/g, "'").replace(/"/g, "\\\"")}"`) }; } catch {}
  }
  if (value.startsWith("[") && value.endsWith("]")) {
    const entries = splitTopLevel(value.slice(1, -1)).map(parseLiteral);
    if (entries.every((entry) => entry.ok)) return { ok: true, value: entries.map((entry) => entry.value) };
  }
  if (value.startsWith("{") && value.endsWith("}")) {
    const result = {};
    for (const entry of splitTopLevel(value.slice(1, -1))) {
      const colon = entry.indexOf(":");
      if (colon < 0) return { ok: false };
      const key = entry.slice(0, colon).trim().replace(/^['\"]|['\"]$/g, "");
      const parsed = parseLiteral(entry.slice(colon + 1));
      if (!parsed.ok) return { ok: false };
      result[key] = parsed.value;
    }
    return { ok: true, value: result };
  }
  return { ok: false };
}

function parseCall(raw) {
  let line = raw.trim();
  line = line.replace(/^(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*=\s*/, "").replace(/^return\s+/, "");
  line = line.replace(/;\s*$/, "");
  const match = line.match(/^([A-Za-z_$][\w$]*)\s*\((.*)\)$/);
  if (!match || ["console", "new", "return", "function", "if", "while", "for"].includes(match[1])) return null;
  const args = splitTopLevel(match[2]).map(parseLiteral);
  return args.every((arg) => arg.ok) ? args.map((arg) => arg.value) : null;
}

function parseExpected(raw) {
  if (/^\s{2,}[-+]?\d/.test(raw)) return { ok: false };
  const value = raw.trim().replace(/;\s*$/, "").replace(/^resultado:\s*/i, "").replace(/^→\s*/, "");
  const direct = parseLiteral(value);
  if (direct.ok) return direct;
  const candidate = value.match(/^(undefined|null|true|false|-?\d+(?:\.\d+)?|\"(?:\\.|[^\"\\])*\"|'(?:\\.|[^'\\])*'|\[[^\n]*\]|\{[^\n]*\})\s*(?:[—(].*)?$/);
  return candidate ? parseLiteral(candidate[1]) : { ok: false };
}

function extractCases(description) {
  const cases = [];
  let pendingArgs = null;
  let pendingExpected = null;
  const flushPending = () => {
    if (pendingArgs && pendingExpected) cases.push({ args: pendingArgs, expected: pendingExpected.value });
    pendingArgs = null;
    pendingExpected = null;
  };
  for (const line of description.split(/\r?\n/)) {
    const arrow = line.match(/→|=>|->/);
    if (arrow) {
      const index = line.indexOf(arrow[0]);
      const args = parseCall(line.slice(0, index));
      const expected = parseExpected(line.slice(index + arrow[0].length));
      if (args && expected.ok) { cases.push({ args, expected: expected.value }); pendingArgs = null; }
      else if (!args && pendingArgs && expected.ok) { cases.push({ args: pendingArgs, expected: expected.value }); pendingArgs = null; }
      else if (args) { flushPending(); pendingArgs = args; }
      pendingExpected = null;
      continue;
    }
    const comment = line.indexOf("//");
    if (comment >= 0) {
      const args = parseCall(line.slice(0, comment));
      const expected = parseExpected(line.slice(comment + 2));
      if (args && expected.ok) { flushPending(); cases.push({ args, expected: expected.value }); }
      else if (args) { flushPending(); pendingArgs = args; }
      else if (pendingArgs && expected.ok) pendingExpected = expected;
      continue;
    }
    const args = parseCall(line);
    if (args) { flushPending(); pendingArgs = args; }
    else if (line.trim() && !line.trim().startsWith("*") && !line.trim().startsWith("//")) flushPending();
  }
  flushPending();
  return [...new Map(cases.map((testCase) => [JSON.stringify(testCase), testCase])).values()];
}

let addedCases = 0;
for (const exercise of catalog) {
  const parsed = extractCases(exercise.description);
  exercise.cases = [...new Map(parsed.map((testCase) => [JSON.stringify(testCase), testCase])).values()];
  addedCases += exercise.cases.length;
}

await writeFile(catalogPath, JSON.stringify(catalog, null, 2) + "\n");
console.log(`Catalog now has ${addedCases} examples across ${catalog.filter((item) => item.cases.length).length} challenges.`);
