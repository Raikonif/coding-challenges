import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = resolve(root, "catalog/coding-challenges.json");
const exercises = JSON.parse(await readFile(catalogPath, "utf8"));

function safeAlias(name, fallback) {
  const reserved = new Set(["default", "class", "function", "return", "delete", "new", "if", "else", "for", "while", "switch", "case", "throw", "try", "catch", "finally", "const", "let", "var", "export", "import", "in", "of", "void", "with", "yield", "await"]);
  return /^[A-Za-z_$][\w$]*$/.test(name) && !reserved.has(name) ? name : fallback;
}

for (const exercise of exercises) {
  const number = String(exercise.number).padStart(3, "0");
  const pythonStem = `${number}_${exercise.id.replaceAll("-", "_")}`;
  const typescriptStem = `${number}-${exercise.id}`;
  const pythonSource = exercise.sources.python ?? exercise.sources.typescript;
  const typescriptSource = exercise.sources.typescript ?? exercise.sources.python;
  const pythonAlias = safeAlias(exercise.pythonFunction, "solve");
  const typescriptAlias = safeAlias(exercise.typescriptFunction, "solve");
  const sourceUrl = `https://coding-challenges.dev/problems/${typescriptSource}`;
  const pythonExport = pythonAlias === "solve" ? "" : `\n\n${pythonAlias} = solve`;
  const typescriptExport = typescriptAlias === "solve" ? "" : `\n\nexport const ${typescriptAlias} = solve;`;

  const python = `"""${exercise.title} (${exercise.difficulty}).\n\nSource exercise: ${sourceUrl}\nThe full prompt and examples are recorded in catalog/coding-challenges.json.\n"""\n\nfrom python.platform_solutions import solve_challenge\n\n\ndef solve(*args):\n    """Solve the ${exercise.title} challenge."""\n    return solve_challenge(${JSON.stringify(exercise.id)}, *args)${pythonExport}\n`;
  const typescript = `/**\n * ${exercise.title} (${exercise.difficulty}).\n * Source exercise: ${sourceUrl}\n * Full prompt and examples: catalog/coding-challenges.json\n */\nimport { solveChallenge } from "./platform-solutions.ts";\n\nexport function solve(...args: any[]): any {\n  return solveChallenge(${JSON.stringify(exercise.id)}, args);\n}${typescriptExport}\n`;

  await writeFile(resolve(root, "python", `${pythonStem}.py`), python);
  await writeFile(resolve(root, "typescript", `${typescriptStem}.ts`), typescript);
}

console.log(`Generated ${exercises.length} Python and TypeScript exercise modules.`);
