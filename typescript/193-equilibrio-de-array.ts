/**
 * Equilibrio de array (hard).
 * Source exercise: https://coding-challenges.dev/problems/equilibrio-de-array
 * Prompt and examples:
 * Dado un array de enteros, encuentra el **índice de equilibrio**: el primer índice `i` tal que la suma de los elementos a la izquierda de `i` es igual a la suma de los elementos a la derecha de `i`.
 *
 * Los elementos en el propio índice `i` no se incluyen en ninguna de las dos sumas.
 *
 * Si no existe ningún índice de equilibrio, devuelve `-1`.
 *
 * ## Ejemplos
 *
 * ```ts
 * findEquilibriumIndex([1, 3, 5, 2, 2])   // 2  (izq: 1+3=4, der: 2+2=4)
 * findEquilibriumIndex([1, 2, 3])          // -1  (no existe equilibrio)
 * findEquilibriumIndex([0, 0, 0])          // 0  (izq: 0, der: 0+0=0 — primer índice)
 * findEquilibriumIndex([2, 1, -1])         // 0  (izq: 0, der: 1+(-1)=0)
 * ```
 *
 * ## Notas
 *
 * - Si hay varios índices de equilibrio, devuelve el **primero** (el de menor índice).
 * - Un array de un solo elemento tiene equilibrio en el índice `0`.
 * - La solución debe ejecutarse en O(n).
 */
export function findEquilibriumIndex(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = findEquilibriumIndex;
