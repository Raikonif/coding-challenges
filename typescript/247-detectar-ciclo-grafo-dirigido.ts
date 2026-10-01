/**
 * Detectar ciclo en grafo dirigido (hard).
 * Source exercise: https://coding-challenges.dev/problems/detectar-ciclo-grafo-dirigido
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("detectar-ciclo-grafo-dirigido", args);
}

export const hasCycle = solve;
