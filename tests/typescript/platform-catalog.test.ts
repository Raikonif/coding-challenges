import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { dirname, resolve } from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

type ExampleCase = { args: unknown[]; expected: unknown };
type CatalogExercise = {
  number: number;
  id: string;
  title: string;
  cases: ExampleCase[];
  smokeArgs: unknown[];
};

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const catalog = JSON.parse(
  readFileSync(resolve(root, "catalog/coding-challenges.json"), "utf8"),
) as CatalogExercise[];

function expectedValue(value: any): any {
  if (Array.isArray(value)) return value.map(expectedValue);
  if (value && typeof value === "object") {
    if (value.$undefined === true && Object.keys(value).length === 1) return undefined;
    return Object.fromEntries(Object.entries(value).map(([key, nested]) => [key, expectedValue(nested)]));
  }
  return value;
}

for (const exercise of catalog) {
  const number = String(exercise.number).padStart(3, "0");
  const modulePath = resolve(root, "typescript", `${number}-${exercise.id}.ts`);
  const module = await import(pathToFileURL(modulePath).href);
  const solve = module.solve as (...args: any[]) => unknown;

  test(`${number} ${exercise.title}`, () => {
    assert.equal(typeof solve, "function");
    if (exercise.cases.length) {
      for (const example of exercise.cases) {
        assert.deepEqual(solve(...expectedValue(example.args)), expectedValue(example.expected), JSON.stringify(example.args));
      }
    } else if (exercise.smokeArgs.length) {
      solve(...exercise.smokeArgs);
    }
  });
}
