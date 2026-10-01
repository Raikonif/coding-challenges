/**
 * Vocales en posiciones pares (easy).
 * Source exercise: https://coding-challenges.dev/problems/vocales-en-posiciones-pares
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("vocales-en-posiciones-pares", args);
}

export const vowelsAtEvenIndices = solve;
