/**
 * Vocales en posiciones pares (easy).
 * Source exercise: https://coding-challenges.dev/problems/vocales-en-posiciones-pares
 * Prompt and examples:
 * ## Descripción
 *
 * Dada una cadena de texto, cuenta cuántas vocales (`a`, `e`, `i`, `o`, `u`) aparecen en **índices pares** (0, 2, 4, ...).
 *
 * La comparación debe ser **case-insensitive** (mayúsculas y minúsculas cuentan igual).
 *
 * ## Ejemplos
 *
 * ```
 * vowelsAtEvenIndices("abecedario") // 5
 * // índice 0 → 'a' (vocal)
 * // índice 2 → 'e' (vocal)
 * // índice 4 → 'e' (vocal)
 * // índice 6 → 'a' (vocal)
 * // índice 8 → 'i' (vocal)
 * // Total: 5
 *
 * vowelsAtEvenIndices("hola") // 0
 * // índice 0 → 'h' (no vocal)
 * // índice 2 → 'l' (no vocal)
 * // "hola" → h(0) o(1) l(2) a(3) → 0 vocales en pares
 *
 * vowelsAtEvenIndices("aeiou") // 3
 * // a(0) → vocal par
 * // e(1) → impar
 * // i(2) → vocal par
 * // o(3) → impar
 * // u(4) → vocal par
 * // Total: 3
 * ```
 *
 * ## Notas
 *
 * - Los índices comienzan en **0**.
 * - Si la cadena está vacía, retorna `0`.
 * - Ignora mayúsculas/minúsculas.
 */
export function vowelsAtEvenIndices(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = vowelsAtEvenIndices;
