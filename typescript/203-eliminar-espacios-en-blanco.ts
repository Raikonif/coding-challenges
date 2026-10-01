/**
 * Eliminar espacios en blanco (easy).
 * Source exercise: https://coding-challenges.dev/problems/eliminar-espacios-en-blanco
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("eliminar-espacios-en-blanco", args);
}

export const trim = solve;
