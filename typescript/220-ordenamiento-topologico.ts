/**
 * Ordenamiento topológico (hard).
 * Source exercise: https://coding-challenges.dev/problems/ordenamiento-topologico
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("ordenamiento-topologico", args);
}

export const topologicalSort = solve;
