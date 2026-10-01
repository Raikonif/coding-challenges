/**
 * Profundidad de array (master).
 * Source exercise: https://coding-challenges.dev/problems/profundidad-de-array
 * Prompt and examples:
 * ## Profundidad de array
 *
 * Dado un array que puede contener otros arrays anidados, determina la profundidad máxima de anidamiento.
 *
 * Un array plano (sin arrays internos) tiene profundidad 1. Un array vacío tiene profundidad 1.
 *
 * ### Parámetros
 *
 * - `arr`: Un array que puede contener números u otros arrays anidados.
 *
 * ### Valor de retorno
 *
 * Un número entero que representa la profundidad máxima de anidamiento del array.
 *
 * ### Ejemplos
 *
 * ```typescript
 * arrayDepth([1, 2, 3]);           // 1
 * arrayDepth([1, [2, 3]]);         // 2
 * arrayDepth([1, [2, [3]]]);       // 3
 * arrayDepth([]);                  // 1
 * arrayDepth([[[[]]]])             // 4
 * arrayDepth([1, [2], [[3]], [[[4]]]]); // 4
 * ```
 *
 * ### Pista
 *
 * Usa recursión para explorar cada elemento del array. Si un elemento es un array, calcula su profundidad recursivamente y quédate con la mayor.
 */
export function arrayDepth(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = arrayDepth;
