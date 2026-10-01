/**
 * Reconstruir árbol desde preorder e inorder (master).
 * Source exercise: https://coding-challenges.dev/problems/reconstruir-arbol-preorder-inorder
 * Prompt and examples:
 * ## Descripción
 *
 * Dados dos arrays que representan el recorrido **preorder** (raíz → izquierda → derecha) e **inorder** (izquierda → raíz → derecha) de un árbol binario, reconstruye el árbol y retorna su recorrido por niveles (**BFS / level-order**) como un array.
 *
 * Usa `null` para representar los hijos ausentes en el array de salida, y omite los `null` del final del array.
 *
 * ## Ejemplos
 *
 * ```ts
 * buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
 * //    3
 * //   / \
 * //  9   20
 * //     /  \
 * //    15    7
 * // → [3, 9, 20, null, null, 15, 7]
 *
 * buildTree([1, 2], [2, 1])
 * //  1
 * // /
 * // 2
 * // → [1, 2]
 *
 * buildTree([1], [1])
 * // → [1]
 * ```
 *
 * ## Notas
 *
 * - Todos los valores del árbol son únicos.
 * - Los arrays preorder e inorder siempre son válidos y consistentes.
 * - El array de salida es el recorrido BFS, con `null` para hijos ausentes, pero **sin** `null` al final del array.
 *
 * ## Restricciones
 *
 * - `1 ≤ n ≤ 100`
 * - Los valores son enteros únicos.
 */
export function buildTree(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = buildTree;
