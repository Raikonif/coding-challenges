/**
 * Reconstruir string desde frecuencias (hard).
 * Source exercise: https://coding-challenges.dev/problems/reconstruir-string-desde-frecuencias
 * Prompt and examples:
 * ## Reconstruir string desde frecuencias
 *
 * Dado un objeto donde las claves son caracteres y los valores son sus frecuencias, reconstruye el string original.
 *
 * El string resultado debe tener los caracteres ordenados por **frecuencia descendente**. Si dos caracteres tienen la misma frecuencia, se ordenan **alfabéticamente de forma ascendente**.
 *
 * ### Ejemplos
 *
 * ```ts
 * rebuildString({ a: 3, b: 1, c: 2 })
 * // "aaacccb" → no, el orden es por frecuencia desc: a(3), c(2), b(1)
 * // resultado: "aaaccb"
 *
 * rebuildString({ z: 2, a: 2, m: 1 })
 * // a y z tienen la misma frecuencia → orden alfabético: a antes que z
 * // resultado: "aazzm"
 *
 * rebuildString({ x: 1 })
 * // "x"
 *
 * rebuildString({})
 * // ""
 * ```
 *
 * ### Notas
 * - Los valores de frecuencia son enteros positivos.
 * - Las claves son siempre un único carácter.
 * - Si el objeto está vacío, devuelve un string vacío `""`.
 */
export function rebuildString(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = rebuildString;
