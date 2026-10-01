/**
 * Diferencia de arrays (medium).
 * Source exercise: https://coding-challenges.dev/problems/diferencia-de-arrays
 * Prompt and examples:
 * ## Diferencia de arrays
 *
 * Dado dos arrays de números, devuelve un nuevo array con los elementos que están en el primer array pero **no** en el segundo. El orden de los elementos en el resultado debe respetar el orden del primer array. No debe haber duplicados en el resultado.
 *
 * ### Ejemplos
 *
 * ```ts
 * arrayDifference([1, 2, 3, 4], [2, 4])       // [1, 3]
 * arrayDifference([5, 6, 7], [1, 2, 3])        // [5, 6, 7]
 * arrayDifference([1, 1, 2, 3], [1])           // [2, 3]
 * arrayDifference([10, 20, 30], [10, 20, 30])  // []
 * ```
 *
 * ### Notas
 *
 * - Devuelve solo los elementos del primer array que no aparecen en el segundo.
 * - El resultado no debe tener duplicados aunque el primer array los tenga.
 * - Si todos los elementos del primer array están en el segundo, devuelve un array vacío.
 */
export function arrayDifference(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = arrayDifference;
