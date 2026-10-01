/**
 * Filtrar propiedades (medium).
 * Source exercise: https://coding-challenges.dev/problems/filtrar-propiedades
 * Prompt and examples:
 * ## Filtrar propiedades
 *
 * Dado un objeto y un array de claves, devuelve un **nuevo objeto** que solo contenga las propiedades cuyas claves aparecen en el array.
 *
 * ### Parámetros
 *
 * - `obj` (Record<string, unknown>): El objeto original.
 * - `claves` (string[]): Las claves que se desean conservar.
 *
 * ### Valor de retorno
 *
 * - (Record<string, unknown>): Un nuevo objeto con solo las propiedades indicadas. Si una clave del array no existe en el objeto, simplemente se ignora.
 *
 * ### Ejemplos
 *
 * ```typescript
 * filtrarPropiedades({ a: 1, b: 2, c: 3 }, ["a", "c"])
 * // → { a: 1, c: 3 }
 *
 * filtrarPropiedades({ nombre: "Ana", edad: 25, pais: "MX" }, ["nombre", "pais"])
 * // → { nombre: "Ana", pais: "MX" }
 *
 * filtrarPropiedades({ x: 10 }, ["y", "z"])
 * // → {}
 *
 * filtrarPropiedades({}, ["a"])
 * // → {}
 * ```
 *
 * ### Notas
 *
 * - No modifiques el objeto original.
 * - Si ninguna clave coincide, devuelve un objeto vacío `{}`.
 */
export function filtrarPropiedades(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = filtrarPropiedades;
