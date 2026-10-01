/**
 * Paréntesis válidos (master).
 * Source exercise: https://coding-challenges.dev/problems/parentesis-validos
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("parentesis-validos", args);
}

export const isValidParentheses = solve;
