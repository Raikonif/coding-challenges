/**
 * Agrupar por primera letra (medium).
 * Source exercise: https://coding-challenges.dev/problems/agrupar-por-primera-letra
 * Prompt and examples:
 * ## Agrupar por primera letra
 *
 * Dada una lista de palabras, devuelve un objeto donde cada clave es una letra del abecedario y su valor es un array con todas las palabras que comienzan con esa letra.
 *
 * - Las claves deben ser **letras minúsculas**.
 * - Solo incluir las letras que tengan al menos una palabra.
 * - Las palabras dentro de cada grupo deben aparecer en el **mismo orden** en que aparecen en el array original.
 *
 * ## Ejemplos
 *
 * ```
 * groupByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"])
 * → { a: ["apple", "avocado"], b: ["banana", "blueberry"], c: ["cherry"] }
 *
 * groupByFirstLetter(["Zebra", "zero", "Zoo"])
 * → { z: ["Zebra", "zero", "Zoo"] }
 *
 * groupByFirstLetter([])
 * → {}
 * ```
 *
 * ## Notas
 *
 * - Considerar solo la primera letra de cada palabra, convertida a minúscula para la clave.
 * - La palabra en sí se guarda **tal cual** (sin modificar su capitalización).
 *
 */
export function groupByFirstLetter(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = groupByFirstLetter;
