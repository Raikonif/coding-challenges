/**
 * Números faltantes en rango (medium).
 * Source exercise: https://coding-challenges.dev/problems/numeros-faltantes-en-rango
 * Prompt and examples:
 * ## Números faltantes en rango
 *
 * Dado un array de enteros y un número `n`, devuelve un array con todos los números del rango `[1, n]` que **no aparecen** en el array de entrada. El resultado debe estar ordenado de menor a mayor.
 *
 * ## Ejemplos
 *
 * ```ts
 * missingNumbers([1, 2, 4], 5)       // [3, 5]
 * missingNumbers([1, 2, 3, 4, 5], 5) // []
 * missingNumbers([], 4)              // [1, 2, 3, 4]
 * missingNumbers([3], 3)             // [1, 2]
 * ```
 *
 * ## Notas
 *
 * - El array de entrada puede contener números fuera del rango `[1, n]`; ignóralos.
 * - El array de entrada puede contener duplicados.
 * - Devuelve los números faltantes ordenados de menor a mayor.
 */
export function missingNumbers(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = missingNumbers;
