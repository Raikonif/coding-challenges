/**
 * Ventana deslizante máxima (hard).
 * Source exercise: https://coding-challenges.dev/problems/ventana-deslizante-maxima
 * Prompt and examples:
 * ## Descripción
 *
 * Dado un array de números enteros y un número `k`, retorna un array con el **valor máximo de cada ventana deslizante de tamaño `k`**.
 *
 * Una ventana deslizante se mueve de izquierda a derecha, avanzando de uno en uno. Para cada posición de la ventana, debes encontrar el elemento máximo.
 *
 * ## Ejemplos
 *
 * ```
 * slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3)
 * // Ventanas: [1,3,-1]=3, [3,-1,-3]=3, [-1,-3,5]=5, [-3,5,3]=5, [5,3,6]=6, [3,6,7]=7
 * // Resultado: [3, 3, 5, 5, 6, 7]
 *
 * slidingWindowMax([1, -1], 1)
 * // Resultado: [1, -1]
 *
 * slidingWindowMax([9, 11], 2)
 * // Resultado: [11]
 *
 * slidingWindowMax([4, 3, 11, 2], 2)
 * // Resultado: [4, 11, 11]
 * ```
 *
 * ## Notas
 *
 * - Puedes asumir que `1 <= k <= array.length`.
 * - El array puede contener números negativos.
 * - La solución eficiente usa una **deque (cola de doble extremo)** para lograr O(n).
 * - Se aceptan también soluciones O(n*k).
 */
export function slidingWindowMax(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = slidingWindowMax;
