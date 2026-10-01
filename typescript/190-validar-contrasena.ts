/**
 * Validar contraseña (medium).
 * Source exercise: https://coding-challenges.dev/problems/validar-contrasena
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("validar-contrasena", args);
}

export const isValidPassword = solve;
