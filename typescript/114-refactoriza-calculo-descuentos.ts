/**
 * Refactoriza el cálculo de descuentos (medium).
 * Source exercise: https://coding-challenges.dev/problems/refactoriza-calculo-descuentos
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("refactoriza-calculo-descuentos", args);
}

export const calculateOrderDiscount = solve;
