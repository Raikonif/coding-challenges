/**
 * Palabras que inician con mayúscula (easy).
 * Source exercise: https://coding-challenges.dev/problems/palabras-con-mayuscula
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("palabras-con-mayuscula", args);
}

export const countCapitalizedWords = solve;
