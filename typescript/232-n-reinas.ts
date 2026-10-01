/**
 * N-Reinas (master).
 * Source exercise: https://coding-challenges.dev/problems/n-reinas
 * Prompt and examples:
 * ## N-Reinas
 *
 * El problema de las **N-Reinas** consiste en colocar `n` reinas en un tablero de ajedrez de `n×n` de forma que ninguna reina ataque a otra.
 *
 * Dos reinas se atacan si están en la misma fila, columna o diagonal.
 *
 * Implementa la función `solveNQueens` que recibe un entero `n` y devuelve **todas las soluciones válidas** como un array de arrays.
 *
 * Cada solución es un array de `n` números enteros donde el valor en la posición `i` representa la **columna** (0-indexada) en la que se coloca la reina de la fila `i`.
 *
 * Las soluciones deben estar ordenadas **lexicográficamente**.
 *
 * ### Ejemplos
 *
 * **n = 1**
 * ```
 * Tablero 1×1: una sola reina en (0,0)
 * Resultado: [[0]]
 * ```
 *
 * **n = 4**
 * ```
 * Tablero 4×4:
 * Solución 1: .Q..   → [1,3,0,2]
 *             ...Q
 *             Q...
 *             ..Q.
 *
 * Solución 2: ..Q.   → [2,0,3,1]
 *             Q...
 *             ...Q
 *             .Q..
 *
 * Resultado: [[1,3,0,2],[2,0,3,1]]
 * ```
 *
 * ### Restricciones
 *
 * - `1 <= n <= 8`
 * - Las soluciones deben estar ordenadas lexicográficamente
 * - Cada solución es un array de columnas (0-indexado) por fila
 *
 */
export function nReinas(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = nReinas;
