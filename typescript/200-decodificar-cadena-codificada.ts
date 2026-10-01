/**
 * Decodificar cadena codificada (master).
 * Source exercise: https://coding-challenges.dev/problems/decodificar-cadena-codificada
 * Prompt and examples:
 * ## Decodificar cadena codificada
 *
 * Dado un string codificado con el formato `k[cadena]`, donde `cadena` dentro de los corchetes debe repetirse exactamente `k` veces, devuelve el string decodificado.
 *
 * Puedes asumir que el string de entrada siempre es válido: no hay espacios extras, los corchetes están bien balanceados y `k` siempre es un entero positivo.
 *
 * Los corchetes pueden estar **anidados**.
 *
 * ## Ejemplos
 *
 * ```
 * entrada: "3[a]2[bc]"
 * salida: "aaabcbc"
 * ```
 *
 * ```
 * entrada: "3[a2[c]]"
 * salida: "accaccacc"
 * ```
 *
 * ```
 * entrada: "2[abc]3[cd]ef"
 * salida: "abcabccdcdcdef"
 * ```
 *
 * ```
 * entrada: "10[a]"
 * salida: "aaaaaaaaaa"
 * // k puede tener más de un dígito.
 * ```
 *
 * ## Restricciones
 *
 * - `1 <= s.length <= 30`
 * - `s` contiene dígitos, letras minúsculas y corchetes `[` `]`.
 * - Se garantiza que `k` es un entero entre 1 y 300.
 * - No hay letras sueltas antes de los corchetes (solo dentro o fuera de ellos).
 *
 * ## Pista
 *
 * Usa una **pila (stack)**. Al encontrar un `[`, guarda el string actual y el número acumulado. Al encontrar un `]`, extrae de la pila y repite el string actual el número de veces indicado.
 */
export function decodificarCadenaCodificada(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = decodificarCadenaCodificada;
