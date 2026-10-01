/**
 * Merge Sort (master).
 * Source exercise: https://coding-challenges.dev/problems/merge-sort
 * Prompt and examples:
 * Implementa el algoritmo de ordenamiento **Merge Sort** de forma recursiva.
 *
 * Merge Sort es un algoritmo de tipo "divide y conquista":
 * 1. Divide el array en dos mitades.
 * 2. Ordena recursivamente cada mitad.
 * 3. **Fusiona** las dos mitades ordenadas en un único array ordenado.
 *
 * La función debe retornar un **nuevo array** con los elementos ordenados de menor a mayor, sin modificar el array original.
 *
 * ## Ejemplos
 *
 * ```ts
 * mergeSort([3, 1, 4, 1, 5, 9, 2, 6])
 * // → [1, 1, 2, 3, 4, 5, 6, 9]
 * ```
 *
 * ```ts
 * mergeSort([])
 * // → []
 * ```
 *
 * ```ts
 * mergeSort([5, 4, 3, 2, 1])
 * // → [1, 2, 3, 4, 5]
 * ```
 *
 * ```ts
 * mergeSort([-3, 0, 5, -1, 2])
 * // → [-3, -1, 0, 2, 5]
 * ```
 *
 * ## Notas
 *
 * - Debes implementar el algoritmo **desde cero** usando recursión.
 * - No puedes usar `Array.prototype.sort`.
 * - La complejidad esperada es **O(n log n)**.
 * - Si el array tiene 0 o 1 elementos, retorna una copia del array.
 */
export function mergeSort(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = mergeSort;
