/**
 * Fibonacci (medium).
 * Source exercise: https://coding-challenges.dev/problems/fibonacci
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("fibonacci", args);
}

export const fibonacci = solve;
