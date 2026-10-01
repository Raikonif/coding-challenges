/**
 * Primer entero positivo faltante (hard).
 * Source exercise: https://coding-challenges.dev/problems/first-missing-positive
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("first-missing-positive", args);
}

export const firstMissingPositive = solve;
