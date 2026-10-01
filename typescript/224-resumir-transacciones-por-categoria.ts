/**
 * Resumir transacciones por categoría (hard).
 * Source exercise: https://coding-challenges.dev/problems/resumir-transacciones-por-categoria
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("resumir-transacciones-por-categoria", args);
}

export const summarizeByCategory = solve;
