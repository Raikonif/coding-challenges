/**
 * Búsqueda binaria en matriz 2D (master).
 * Source exercise: https://coding-challenges.dev/problems/typescript-busqueda-binaria-matriz-2d
 * Prompt and examples:
 * ## Búsqueda binaria en matriz 2D
 *
 * Dada una matriz `m x n` donde:
 * - Cada fila está ordenada de izquierda a derecha.
 * - El primer elemento de cada fila es mayor que el último elemento de la fila anterior.
 *
 * Implementa una función que, dado el número objetivo `target`, devuelva su posición `[fila, columna]` dentro de la matriz. Si no existe, devuelve `[-1, -1]`.
 *
 * La solución debe funcionar en **O(log(m·n))** — trata la matriz como un array plano y aplica búsqueda binaria pura.
 *
 * ## Ejemplos
 *
 * ```typescript
 * binarySearchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)
 * // → [0, 1]
 *
 * binarySearchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)
 * // → [-1, -1]
 *
 * binarySearchMatrix([[1]], 1)
 * // → [0, 0]
 * ```
 *
 * ## Restricciones
 *
 * - `1 ≤ m, n ≤ 100`
 * - `-10^4 ≤ matrix[i][j], target ≤ 10^4`
 * - La complejidad esperada es O(log(m·n)).
 */
export function binarySearchMatrix(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = binarySearchMatrix;
