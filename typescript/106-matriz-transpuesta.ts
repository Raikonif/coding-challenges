/**
 * Matriz transpuesta (hard).
 * Source exercise: https://coding-challenges.dev/problems/matriz-transpuesta
 * Prompt and examples:
 * ## Matriz transpuesta
 *
 * Dada una matriz (array de arrays) de numeros, devuelve su **transpuesta**. La transpuesta de una matriz intercambia filas por columnas: el elemento en la fila `i`, columna `j` pasa a la fila `j`, columna `i`.
 *
 * ### Ejemplos
 *
 * ```typescript
 * transpose([[1, 2, 3], [4, 5, 6]])
 * // [[1, 4], [2, 5], [3, 6]]
 *
 * transpose([[1]])
 * // [[1]]
 *
 * transpose([[1, 2], [3, 4], [5, 6]])
 * // [[1, 3, 5], [2, 4, 6]]
 * ```
 *
 * ### Notas
 *
 * - La matriz siempre sera rectangular (todas las filas tienen el mismo largo).
 * - La matriz tendra al menos 1 fila y 1 columna.
 * - Los valores pueden ser positivos, negativos o cero.
 */
export function transpose(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = transpose;
