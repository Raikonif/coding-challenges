/**
 * Objeto por defecto (easy).
 * Source exercise: https://coding-challenges.dev/problems/objeto-por-defecto
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("objeto-por-defecto", args);
}

export const defaultsObject = solve;
