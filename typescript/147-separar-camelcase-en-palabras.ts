/**
 * Separar camelCase en palabras (easy).
 * Source exercise: https://coding-challenges.dev/problems/separar-camelcase-en-palabras
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("separar-camelcase-en-palabras", args);
}

export const splitCamelCase = solve;
