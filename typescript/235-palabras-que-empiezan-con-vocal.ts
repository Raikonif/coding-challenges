/**
 * Palabras que empiezan con vocal (easy).
 * Source exercise: https://coding-challenges.dev/problems/palabras-que-empiezan-con-vocal
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("palabras-que-empiezan-con-vocal", args);
}

export const countWordsStartingWithVowel = solve;
