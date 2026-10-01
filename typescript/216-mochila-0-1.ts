/**
 * Mochila 0/1 (master).
 * Source exercise: https://coding-challenges.dev/problems/mochila-0-1
 * Prompt and examples:
 * ## Mochila 0/1
 *
 * El **problema de la mochila 0/1** es un clásico de programación dinámica.
 *
 * Tienes una mochila con una **capacidad máxima** en peso. Se te da un conjunto de artículos, cada uno con un **peso** y un **valor**. Debes seleccionar artículos para maximizar el valor total sin exceder la capacidad, y cada artículo solo puede elegirse **una vez** (0 o 1 veces).
 *
 * Devuelve el **valor máximo** que se puede llevar en la mochila.
 *
 * ### Parámetros
 *
 * - `weights`: array de enteros con el peso de cada artículo.
 * - `values`: array de enteros con el valor de cada artículo.
 * - `capacity`: entero con la capacidad máxima de la mochila.
 *
 * ### Ejemplos
 *
 * ```ts
 * knapsack([1, 2, 3], [6, 10, 12], 5)
 * // Artículos posibles: {peso:1,valor:6}, {peso:2,valor:10}, {peso:3,valor:12}
 * // Mejor selección: artículo 2 (peso 2, valor 10) + artículo 3 (peso 3, valor 12) = valor 22
 * // resultado: 22
 *
 * knapsack([2, 3, 4, 5], [3, 4, 5, 6], 5)
 * // resultado: 7  (artículo 0: peso 2 valor 3 + artículo 1: peso 3 valor 4)
 *
 * knapsack([10], [100], 5)
 * // El único artículo pesa más que la capacidad
 * // resultado: 0
 *
 * knapsack([], [], 10)
 * // Sin artículos
 * // resultado: 0
 * ```
 *
 * ### Notas
 * - `weights.length === values.length`.
 * - Todos los pesos y valores son enteros positivos.
 * - `capacity` es un entero no negativo.
 * - Si ningún artículo cabe, devuelve `0`.
 */
export function knapsack(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = knapsack;
