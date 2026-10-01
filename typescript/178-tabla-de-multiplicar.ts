/**
 * Tabla de multiplicar (medium).
 * Source exercise: https://coding-challenges.dev/problems/tabla-de-multiplicar
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("tabla-de-multiplicar", args);
}

export const multiplicationTable = solve;
