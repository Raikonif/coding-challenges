/**
 * Suma de árbol N-ario (medium).
 * Source exercise: https://coding-challenges.dev/problems/suma-arbol-n-ario
 * Prompt and examples:
 * Se te proporciona un árbol N-ario representado como un objeto con la siguiente estructura:
 *
 * ```ts
 * type TreeNode = {
 *   value: number;
 *   children: TreeNode[];
 * };
 * ```
 *
 * Implementa una función recursiva que retorne la **suma de todos los valores** del árbol, incluyendo la raíz y todos sus descendientes.
 *
 * ## Ejemplos
 *
 * ```ts
 * const tree = { value: 1, children: [] };
 * sumTree(tree)
 * // → 1
 * ```
 *
 * ```ts
 * const tree = {
 *   value: 1,
 *   children: [
 *     { value: 2, children: [] },
 *     { value: 3, children: [] }
 *   ]
 * };
 * sumTree(tree)
 * // → 6
 * ```
 *
 * ```ts
 * const tree = {
 *   value: 5,
 *   children: [
 *     {
 *       value: 3,
 *       children: [
 *         { value: 1, children: [] },
 *         { value: 2, children: [] }
 *       ]
 *     },
 *     { value: 4, children: [] }
 *   ]
 * };
 * sumTree(tree)
 * // → 15
 * ```
 *
 * ## Notas
 *
 * - El árbol siempre tiene al menos un nodo (la raíz).
 * - Debes utilizar **recursión** para resolver el ejercicio.
 * - Los valores pueden ser positivos, negativos o cero.
 */
export function sumTree(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = sumTree;
