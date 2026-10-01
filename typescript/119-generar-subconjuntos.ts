/**
 * Generar subconjuntos (hard).
 * Source exercise: https://coding-challenges.dev/problems/generar-subconjuntos
 * Prompt and examples:
 * ## Generar subconjuntos
 *
 * Dado un array de enteros únicos, devuelve todos los subconjuntos posibles (el conjunto potencia), incluyendo el conjunto vacío y el conjunto completo.
 *
 * ## Orden esperado
 *
 * Los subconjuntos deben generarse en el orden estándar de iteración por máscara de bits (bitmask). Para un array de `n` elementos, hay `2^n` subconjuntos posibles. El subconjunto en la posición `i` incluye el elemento `j` si el bit `j` del número `i` está activo.
 *
 * Por ejemplo, para `[1, 2, 3]`:
 *
 * ```
 * i=0 (000): []
 * i=1 (001): [1]
 * i=2 (010): [2]
 * i=3 (011): [1, 2]
 * i=4 (100): [3]
 * i=5 (101): [1, 3]
 * i=6 (110): [2, 3]
 * i=7 (111): [1, 2, 3]
 * ```
 *
 * ## Ejemplos
 *
 * ```
 * subsets([1, 2, 3])
 * // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 *
 * subsets([0])
 * // [[], [0]]
 *
 * subsets([])
 * // [[]]
 *
 * subsets([1, 2])
 * // [[], [1], [2], [1, 2]]
 * ```
 *
 * ## Notas
 *
 * - Los elementos del array son únicos.
 * - El orden de los subconjuntos importa y debe coincidir con el orden por bitmask descrito arriba.
 */
export function subsets(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = subsets;
