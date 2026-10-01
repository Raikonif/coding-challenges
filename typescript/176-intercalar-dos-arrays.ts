/**
 * Intercalar dos arrays (easy).
 * Source exercise: https://coding-challenges.dev/problems/intercalar-dos-arrays
 * Prompt and examples:
 * ## Intercalar dos arrays
 *
 * Dados dos arrays de cualquier tipo, devuelve un nuevo array con los elementos intercalados: primero el elemento 0 del array A, luego el elemento 0 del array B, después el elemento 1 del array A, el elemento 1 del array B, y así sucesivamente.
 *
 * Si un array es más largo que el otro, los elementos sobrantes se agregan al final del resultado.
 *
 * ## Ejemplos
 *
 * ```ts
 * intercalateArrays([1, 2, 3], ['a', 'b', 'c'])
 * // [1, 'a', 2, 'b', 3, 'c']
 *
 * intercalateArrays([1, 2], ['a', 'b', 'c', 'd'])
 * // [1, 'a', 2, 'b', 'c', 'd']
 *
 * intercalateArrays([], [10, 20])
 * // [10, 20]
 * ```
 *
 * ## Notas
 *
 * - No modifiques los arrays originales.
 * - El orden de intercalación es siempre: elemento del primer array, elemento del segundo array.
 *
 */
export function intercalateArrays(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = intercalateArrays;
