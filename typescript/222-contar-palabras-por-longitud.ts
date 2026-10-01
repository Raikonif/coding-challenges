/**
 * Contar palabras por longitud (easy).
 * Source exercise: https://coding-challenges.dev/problems/contar-palabras-por-longitud
 * Prompt and examples:
 * Dada una cadena de texto y un número entero `n`, retorna cuántas palabras de la cadena tienen exactamente `n` caracteres.
 *
 * Una "palabra" es una secuencia de caracteres separada por espacios. No habrá puntuación ni caracteres especiales, solo letras y espacios.
 *
 * ## Ejemplos
 *
 * ```ts
 * countWordsByLength("hola mundo foo", 4)
 * // → 2  ("hola" y "mundo" tienen 4... espera: "hola"=4, "mundo"=5, "foo"=3 → solo "hola" → 1)
 * // Corrección: "hola"=4 → 1
 * ```
 *
 * ```ts
 * countWordsByLength("el gato y el perro", 2)
 * // → 2  ("el" aparece dos veces, ambas cuentan)
 * ```
 *
 * ```ts
 * countWordsByLength("uno dos tres", 3)
 * // → 3  ("uno"=3, "dos"=3, "tres"=4... "tres" tiene 4 letras → solo 2)
 * // Corrección: "uno"=3, "dos"=3 → 2
 * ```
 *
 * ```ts
 * countWordsByLength("", 3)
 * // → 0
 * ```
 *
 * ## Notas
 *
 * - Si la cadena está vacía, retorna `0`.
 * - Las palabras se separan únicamente por espacios.
 * - La comparación es exacta: la palabra debe tener **exactamente** `n` caracteres.
 */
export function countWordsByLength(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = countWordsByLength;
