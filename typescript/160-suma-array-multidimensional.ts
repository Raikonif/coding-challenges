/**
 * Suma de array multidimensional (medium).
 * Source exercise: https://coding-challenges.dev/problems/suma-array-multidimensional
 * Prompt and examples:
 * ## Descripción
 *
 * Dado un array que puede contener números y otros arrays anidados a cualquier profundidad, retorna la **suma de todos los números** que se encuentren en cualquier nivel del array.
 *
 * ## Ejemplos
 *
 * ```
 * sumNestedArray([1, 2, 3]) // 6
 *
 * sumNestedArray([1, [2, 3], [4, [5]]]) // 15
 * // 1 + 2 + 3 + 4 + 5 = 15
 *
 * sumNestedArray([[1, [2, [3, [4, [5]]]]]]) // 15
 *
 * sumNestedArray([]) // 0
 *
 * sumNestedArray([10, [-5, [3, [2]]]]) // 10
 * // 10 + (-5) + 3 + 2 = 10
 * ```
 *
 * ## Notas
 *
 * - El array puede tener cualquier nivel de anidamiento.
 * - Los números pueden ser negativos.
 * - Usa **recursión** para resolver el problema.
 * - Si el array está vacío, retorna `0`.
 */
export function sumNestedArray(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = sumNestedArray;
