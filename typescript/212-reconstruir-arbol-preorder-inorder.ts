/**
 * Reconstruir árbol desde preorder e inorder (master).
 * Source exercise: https://coding-challenges.dev/problems/reconstruir-arbol-preorder-inorder
 * Full prompt and examples: catalog/coding-challenges.json
 */
import { solveChallenge } from "./platform-solutions.ts";

export function solve(...args: any[]): any {
  return solveChallenge("reconstruir-arbol-preorder-inorder", args);
}

export const buildTree = solve;
