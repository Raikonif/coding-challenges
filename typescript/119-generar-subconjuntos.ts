/**
 * Generar subconjuntos (hard).
 * Source exercise: https://coding-challenges.dev/problems/generar-subconjuntos
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("generar-subconjuntos", args);
}

export const subsets = solve;
