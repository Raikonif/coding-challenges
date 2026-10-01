/**
 * Número con Mayor Secuencia de Collatz (hard).
 * Source exercise: https://coding-challenges.dev/problems/secuencia-de-collatz
 * Prompt and examples:
 * ## Número con Mayor Secuencia de Collatz
 *
 * La **Conjetura de Collatz** define la siguiente secuencia para cualquier entero positivo `n`:
 *
 * - Si `n` es par: el siguiente número es `n / 2`
 * - Si `n` es impar: el siguiente número es `3n + 1`
 * - La secuencia termina cuando llega a `1`
 *
 * Escribe una función `collatzMasLargo` que reciba un número entero positivo `limite` y devuelva el número en el rango `[1, limite]` que genera la secuencia de Collatz más larga. Si hay empate, devuelve el número más grande.
 *
 * ## Ejemplos
 *
 * ```typescript
 * collatzMasLargo(10)
 * // 9 → secuencia: 9, 28, 14, 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1 (20 pasos)
 *
 * collatzMasLargo(1)
 * // 1 → secuencia: 1 (1 paso)
 *
 * collatzMasLargo(5)
 * // 3 → secuencia: 3, 10, 5, 16, 8, 4, 2, 1 (8 pasos)
 * ```
 *
 * ## Restricciones
 *
 * - `limite` es un número entero positivo en el rango `[1, 1_000_000]`.
 * - La conjetura asume que todas las secuencias terminan en 1.
 * - Optimiza tu solución para manejar el límite máximo sin timeout.
 * - No uses librerías externas.
 */
export function collatzMasLargo(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = collatzMasLargo;
