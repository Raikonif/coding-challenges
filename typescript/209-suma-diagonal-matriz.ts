/**
 * Suma diagonal de matriz (medium).
 * Source exercise: https://coding-challenges.dev/problems/suma-diagonal-matriz
 * Prompt and examples:
 * ## Descripción
 *
 * Dada una matriz cuadrada de números, retorna la suma de los elementos de ambas diagonales (principal y secundaria).
 *
 * Si la matriz tiene un número impar de filas, el elemento central pertenece a ambas diagonales, pero debe contarse **solo una vez**.
 *
 * ## Ejemplos
 *
 * ```ts
 * diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
 * // Diagonal principal: 1 + 5 + 9 = 15
 * // Diagonal secundaria: 3 + 5 + 7 = 15
 * // El 5 se cuenta una vez → 25
 *
 * diagonalSum([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]])
 * // Diagonal principal: 4 elementos = 4
 * // Diagonal secundaria: 4 elementos = 4 (sin solapamiento en n par)
 * // → 8
 *
 * diagonalSum([[5]])
 * // → 5
 * ```
 *
 * ## Notas
 *
 * - La matriz siempre es cuadrada (n x n).
 * - La diagonal principal va de `[0][0]` a `[n-1][n-1]`.
 * - La diagonal secundaria va de `[0][n-1]` a `[n-1][0]`.
 */
export function diagonalSum(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = diagonalSum;
