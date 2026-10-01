/**
 * Número con Mayor Secuencia de Collatz (hard).
 * Source exercise: https://coding-challenges.dev/problems/secuencia-de-collatz
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("secuencia-de-collatz", args);
}

export const collatzMasLargo = solve;
