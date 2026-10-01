/**
 * Torre de Hanoi (master).
 * Source exercise: https://coding-challenges.dev/problems/torre-de-hanoi
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("torre-de-hanoi", args);
}

export const torreDeHanoi = solve;
