/**
 * Subarray con suma objetivo (medium).
 * Source exercise: https://coding-challenges.dev/problems/subarray-suma-objetivo
 * Prompt and examples:
 * ## Subarray con suma objetivo
 *
 * Dado un array de números enteros y un número `target`, encuentra el **primer subarray contiguo** cuya suma sea igual a `target`.
 *
 * Devuelve un array `[inicio, fin]` con los **índices** (base 0) del subarray encontrado. Si no existe ningún subarray que cumpla la condición, devuelve `[-1, -1]`.
 *
 * > En caso de haber varios subarrays válidos, devuelve el que comience en el índice más bajo.
 *
 * ---
 *
 * ### Ejemplos
 *
 * **Ejemplo 1**
 *
 * ```
 * Entrada: nums = [1, 4, 2, 3, 5], target = 9
 * Salida:  [1, 3]
 * Explicación: nums[1] + nums[2] + nums[3] = 4 + 2 + 3 = 9
 * ```
 *
 * **Ejemplo 2**
 *
 * ```
 * Entrada: nums = [1, 2, 3, 4, 5], target = 5
 * Salida:  [1, 2]
 * Explicación: nums[1] + nums[2] = 2 + 3 = 5
 *              Es el primer subarray contiguo que suma 5.
 * ```
 *
 * **Ejemplo 3**
 *
 * ```
 * Entrada: nums = [3, 1, 4, 1, 5], target = 100
 * Salida:  [-1, -1]
 * Explicación: Ningún subarray suma 100.
 * ```
 *
 * ---
 *
 * ### Restricciones
 *
 * - `1 <= nums.length <= 1000`
 * - Los valores pueden ser positivos o negativos.
 * - `target` puede ser cualquier entero.
 *
 */
export function subarraySumaObjetivo(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = subarraySumaObjetivo;
