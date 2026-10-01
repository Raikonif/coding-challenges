/**
 * Validar número de Luhn (hard).
 * Source exercise: https://coding-challenges.dev/problems/validar-numero-luhn
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("validar-numero-luhn", args);
}

export const validateLuhn = solve;
