/**
 * Generar paréntesis válidos (hard).
 * Source exercise: https://coding-challenges.dev/problems/generar-parentesis-validos
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("generar-parentesis-validos", args);
}

export const generateParentheses = solve;
