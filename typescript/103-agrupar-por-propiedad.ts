/**
 * Agrupar por propiedad (medium).
 * Source exercise: https://coding-challenges.dev/problems/agrupar-por-propiedad
 * Prompt and examples:
 * ## Agrupar por propiedad
 *
 * Dado un array de objetos y el nombre de una propiedad (clave), devuelve un nuevo objeto donde cada clave es un valor distinto de esa propiedad, y cada valor es un array con los objetos que comparten ese valor.
 *
 * ### Ejemplos
 *
 * ```typescript
 * const people = [
 *   { name: "Ana", city: "Madrid" },
 *   { name: "Luis", city: "Lima" },
 *   { name: "Carlos", city: "Madrid" }
 * ];
 *
 * groupBy(people, "city")
 * // {
 * //   "Madrid": [{ name: "Ana", city: "Madrid" }, { name: "Carlos", city: "Madrid" }],
 * //   "Lima": [{ name: "Luis", city: "Lima" }]
 * // }
 * ```
 *
 * ### Notas
 *
 * - Si el array esta vacio, devuelve un objeto vacio `{}`.
 * - Todos los objetos tendran la propiedad indicada.
 * - El valor de la propiedad siempre sera un string o numero.
 */
export function groupBy(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = groupBy;
