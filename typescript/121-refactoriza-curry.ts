/**
 * Implementar curry (master).
 * Source exercise: https://coding-challenges.dev/problems/refactoriza-curry
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("refactoriza-curry", args);
}

export const curryAdd3 = solve;
