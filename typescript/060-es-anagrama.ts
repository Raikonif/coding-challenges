/**
 * ¿Es anagrama? (hard).
 * Source exercise: https://coding-challenges.dev/problems/es-anagrama
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("es-anagrama", args);
}

export const isAnagram = solve;
