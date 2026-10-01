/**
 * Suma de árbol binario (medium).
 * Source exercise: https://coding-challenges.dev/problems/suma-arbol-binario
 * Prompt and examples:
 * ## Suma de árbol binario
 *
 * Se te da un árbol binario representado como un array siguiendo el orden de nivel (BFS). El índice `0` es la raíz. Para un nodo en el índice `i`:
 *
 * - Hijo izquierdo: índice `2 * i + 1`
 * - Hijo derecho: índice `2 * i + 2`
 * - El valor `null` indica que ese nodo no existe.
 *
 * Tu tarea es calcular la **suma de todos los valores** del árbol usando **recursión**.
 *
 * ## Ejemplos
 *
 * ```typescript
 * sumBinaryTree([1, 2, 3])
 * // 6  (1 + 2 + 3)
 *
 * sumBinaryTree([1, 2, 3, 4, 5, null, null])
 * // 15  (1 + 2 + 3 + 4 + 5)
 *
 * sumBinaryTree([10, null, 5])
 * // 15
 * ```
 *
 * ## Restricciones
 *
 * - El array puede estar vacío → retorna `0`.
 * - Los valores pueden ser negativos.
 * - Debes resolverlo con recursión.
 *
 */
export function sumBinaryTree(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = sumBinaryTree;
