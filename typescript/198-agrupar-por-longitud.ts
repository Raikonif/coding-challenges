/**
 * Agrupar por longitud (medium).
 * Source exercise: https://coding-challenges.dev/problems/agrupar-por-longitud
 * Prompt and examples:
 * ## Agrupar por longitud
 *
 * Dado un array de strings, retorna un objeto donde cada clave es la longitud de las palabras y el valor es un array con todas las palabras de esa longitud, en el mismo orden en que aparecen en el input.
 *
 * ## Ejemplos
 *
 * ```
 * groupByLength(["sol", "mar", "luna", "rio", "nube"])
 * // { 3: ["sol", "mar", "rio"], 4: ["luna", "nube"] }
 *
 * groupByLength(["a", "bb", "ccc", "dd"])
 * // { 1: ["a"], 2: ["bb", "dd"], 3: ["ccc"] }
 *
 * groupByLength([])
 * // {}
 * ```
 *
 * ## Notas
 *
 * - Las claves del objeto deben ser números (la longitud).
 * - Si el array está vacío, retorna un objeto vacío `{}`.
 * - Mantén el orden de aparición dentro de cada grupo.
 */
export function groupByLength(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = groupByLength;
