/**
 * Ordenamiento por conteo (master).
 * Source exercise: https://coding-challenges.dev/problems/ordenamiento-por-conteo
 * Prompt and examples:
 * ## Ordenamiento por conteo (Counting Sort)
 *
 * Implementa el algoritmo de **Counting Sort** para ordenar un array de enteros no negativos de forma ascendente.
 *
 * El Counting Sort es un algoritmo de ordenamiento de complejidad **O(n + k)**, donde `n` es el número de elementos y `k` es el rango de valores. No hace comparaciones: en su lugar, cuenta las ocurrencias de cada valor y reconstruye el array ordenado.
 *
 * ## Algoritmo
 *
 * 1. Encuentra el valor máximo del array.
 * 2. Crea un array de conteo de tamaño `max + 1` inicializado en `0`.
 * 3. Incrementa `conteo[valor]` por cada elemento del array.
 * 4. Recorre el array de conteo y reconstruye el array ordenado.
 *
 * ## Ejemplos
 *
 * ```typescript
 * countingSort([4, 2, 2, 8, 3, 3, 1])
 * // [1, 2, 2, 3, 3, 4, 8]
 *
 * countingSort([0, 5, 0, 3])
 * // [0, 0, 3, 5]
 *
 * countingSort([1])
 * // [1]
 * ```
 *
 * ## Restricciones
 *
 * - El array solo contiene enteros **no negativos**.
 * - Si el array está vacío, retorna `[]`.
 * - No puedes usar `Array.prototype.sort()` ni ningún método de ordenamiento nativo.
 * - Complejidad esperada: O(n + k) en tiempo, O(k) en espacio auxiliar.
 *
 */
export function countingSort(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = countingSort;
