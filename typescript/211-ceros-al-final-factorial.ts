/**
 * Ceros al final del factorial (hard).
 * Source exercise: https://coding-challenges.dev/problems/ceros-al-final-factorial
 * Prompt and examples:
 * ## Descripción
 *
 * Dado un número entero no negativo `n`, retorna la cantidad de ceros que aparecen al final de `n!` (el factorial de n).
 *
 * Un cero al final se forma por cada par de factores `2 × 5`. Como siempre hay más factores de 2 que de 5, la cantidad de ceros equivale a contar cuántas veces el factor `5` aparece en la descomposición de `n!`.
 *
 * ## Ejemplos
 *
 * ```ts
 * trailingZeroes(5)   // 5! = 120 → 1 cero
 * trailingZeroes(10)  // 10! = 3628800 → 2 ceros
 * trailingZeroes(25)  // → 6 ceros
 * trailingZeroes(0)   // 0! = 1 → 0 ceros
 * ```
 *
 * ## Pista
 *
 * - `⌊n/5⌋` cuenta los múltiplos de 5 hasta n.
 * - `⌊n/25⌋` cuenta los que aportan un factor 5 extra.
 * - Y así sucesivamente con potencias de 5.
 * - La solución eficiente es O(log n).
 *
 * ## Restricciones
 *
 * - `0 ≤ n ≤ 10000`
 */
export function trailingZeroes(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = trailingZeroes;
