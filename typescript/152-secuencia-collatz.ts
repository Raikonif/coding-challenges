/**
 * Secuencia de Collatz (master).
 * Source exercise: https://coding-challenges.dev/problems/secuencia-collatz
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("secuencia-collatz", args);
}

export const collatzSequence = solve;
