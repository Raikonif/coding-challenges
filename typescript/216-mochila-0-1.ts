/**
 * Mochila 0/1 (master).
 * Source exercise: https://coding-challenges.dev/problems/mochila-0-1
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("mochila-0-1", args);
}

export const knapsack = solve;
