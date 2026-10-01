/**
 * Suma de matrices (hard).
 * Source exercise: https://coding-challenges.dev/problems/suma-de-matrices
 * Prompt and examples:
 * ## Suma de matrices
 *
 * Dadas dos matrices (arrays de arrays) de números con las mismas dimensiones, devuelve una nueva matriz que sea la suma elemento a elemento de ambas.
 *
 * ### Parámetros
 *
 * - `matA`: Una matriz de números (array de arrays).
 * - `matB`: Una matriz de números con las mismas dimensiones que `matA`.
 *
 * ### Valor de retorno
 *
 * Una nueva matriz donde cada elemento es la suma de los elementos correspondientes de `matA` y `matB`.
 *
 * ### Ejemplos
 *
 * ```typescript
 * addMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]]);
 * // [[6, 8], [10, 12]]
 *
 * addMatrices([[0]], [[0]]);
 * // [[0]]
 *
 * addMatrices([[1, -1], [2, -2], [3, -3]], [[4, 4], [5, 5], [6, 6]]);
 * // [[5, 3], [7, 3], [9, 3]]
 * ```
 *
 * ### Nota
 *
 * Se garantiza que ambas matrices tienen las mismas dimensiones y al menos una fila y una columna.
 */
export function addMatrices(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = addMatrices;
