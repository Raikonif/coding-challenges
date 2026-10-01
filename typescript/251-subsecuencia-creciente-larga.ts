/**
 * Subsecuencia Creciente Más Larga (hard).
 * Source exercise: https://coding-challenges.dev/problems/null
 * Prompt and examples:
 *
 * ## Subsecuencia Creciente Más Larga
 *
 * Dado un arreglo de números enteros, encuentra la **longitud** de la subsecuencia creciente más larga (LIS, por sus siglas en inglés: Longest Increasing Subsequence).
 *
 * Una subsecuencia es un conjunto de elementos del arreglo que mantienen su orden relativo, pero **no tienen que ser contiguos**.
 *
 * Una subsecuencia es **estrictamente creciente** si cada elemento es mayor al anterior.
 *
 * ### Ejemplos
 *
 * **Ejemplo 1:**
 * ```
 * entrada: [10, 9, 2, 5, 3, 7, 101, 18]
 * salida:  4
 * ```
 * Explicación: La subsecuencia más larga es `[2, 3, 7, 101]` con longitud 4.
 *
 * **Ejemplo 2:**
 * ```
 * entrada: [0, 1, 0, 3, 2, 3]
 * salida:  4
 * ```
 * Explicación: La subsecuencia más larga es `[0, 1, 2, 3]` con longitud 4.
 *
 * **Ejemplo 3:**
 * ```
 * entrada: [7, 7, 7, 7, 7]
 * salida:  1
 * ```
 * Explicación: Todos los elementos son iguales, por lo que la subsecuencia más larga tiene longitud 1.
 *
 * ### Restricciones
 *
 * - `1 <= len(nums) <= 2500`
 * - `-10^4 <= nums[i] <= 10^4`
 * - La subsecuencia debe ser **estrictamente creciente** (no se permiten iguales).
 *
 * ### Complejidad esperada
 *
 * - Solución con O(n²) usando programación dinámica es aceptada.
 * - Solución óptima O(n log n) con búsqueda binaria es un reto adicional.
 *
 */
export function subsecuenciaCrecienteLarga(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = subsecuenciaCrecienteLarga;
