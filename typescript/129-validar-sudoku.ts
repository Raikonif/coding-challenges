/**
 * Validar Sudoku (hard).
 * Source exercise: https://coding-challenges.dev/problems/validar-sudoku
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("validar-sudoku", args);
}

export const isValidSudoku = solve;
