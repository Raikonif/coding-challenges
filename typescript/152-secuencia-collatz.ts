/**
 * Secuencia de Collatz (master).
 * Source exercise: https://coding-challenges.dev/problems/secuencia-collatz
 * Prompt and examples:
 * ## Secuencia de Collatz
 *
 * La conjetura de Collatz establece que, partiendo de cualquier entero positivo `n`, si se aplican repetidamente las siguientes reglas se llegará siempre al número 1:
 *
 * - Si `n` es **par**, el siguiente número es `n / 2`.
 * - Si `n` es **impar**, el siguiente número es `3 * n + 1`.
 *
 * Dado un entero positivo `n`, devuelve un array con **toda la secuencia** desde `n` hasta `1` (inclusive), usando **recursión**.
 *
 * ### Ejemplos
 *
 * ```ts
 * collatzSequence(1)   // [1]
 * collatzSequence(2)   // [2, 1]
 * collatzSequence(6)   // [6, 3, 10, 5, 16, 8, 4, 2, 1]
 * collatzSequence(27)  // [27, 82, 41, 124, 62, 31, 94, 47, 142, 71, 214, 107, 322, 161, 484, 242, 121, 364, 182, 91, 274, 137, 412, 206, 103, 310, 155, 466, 233, 700, 350, 175, 526, 263, 790, 395, 1186, 593, 1780, 890, 445, 1336, 668, 334, 167, 502, 251, 754, 377, 1132, 566, 283, 850, 425, 1276, 638, 319, 958, 479, 1438, 719, 2158, 1079, 3238, 1619, 4858, 2429, 7288, 3644, 1822, 911, 2734, 1367, 4102, 2051, 6154, 3077, 9232, 4616, 2308, 1154, 577, 1732, 866, 433, 1300, 650, 325, 976, 488, 244, 122, 61, 184, 92, 46, 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]
 * ```
 *
 * ### Notas
 *
 * - Debes implementar la solución usando **recursión** (sin bucles `for`, `while` ni `do...while`).
 * - El array siempre debe incluir `n` al inicio y `1` al final.
 * - `n` siempre será un entero positivo mayor o igual a 1.
 * - Para `n = 1` la secuencia es simplemente `[1]`.
 */
export function collatzSequence(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = collatzSequence;
