/**
 * Ordenar por múltiples criterios (master).
 * Source exercise: https://coding-challenges.dev/problems/ordenar-por-multiples-criterios
 * Prompt and examples:
 * Implementa una función que ordene un array de objetos según **múltiples criterios de ordenamiento**, aplicados en orden de prioridad.
 *
 * La función recibe:
 * - `items`: un array de objetos con propiedades de tipo `string` o `number`.
 * - `criterios`: un array de objetos que describe el orden de clasificación. Cada criterio tiene:
 *   - `clave`: nombre de la propiedad por la que ordenar.
 *   - `orden`: `"asc"` (ascendente) o `"desc"` (descendente).
 *
 * Los criterios se aplican en orden: el primero tiene mayor prioridad. Si dos elementos son iguales en el primer criterio, se usa el segundo criterio, y así sucesivamente.
 *
 * ## Ejemplos
 *
 * ```typescript
 * const personas = [
 *   { nombre: "Ana", edad: 30 },
 *   { nombre: "Luis", edad: 25 },
 *   { nombre: "Ana", edad: 25 },
 * ];
 *
 * ordenarPorMultiplesCriterios(personas, [
 *   { clave: "nombre", orden: "asc" },
 *   { clave: "edad", orden: "asc" },
 * ]);
 * // [
 * //   { nombre: "Ana", edad: 25 },
 * //   { nombre: "Ana", edad: 30 },
 * //   { nombre: "Luis", edad: 25 },
 * // ]
 *
 * ordenarPorMultiplesCriterios(personas, [
 *   { clave: "edad", orden: "desc" },
 *   { clave: "nombre", orden: "asc" },
 * ]);
 * // [
 * //   { nombre: "Ana", edad: 30 },
 * //   { nombre: "Ana", edad: 25 },
 * //   { nombre: "Luis", edad: 25 },
 * // ]
 * ```
 *
 * ## Notas
 *
 * - No modifiques el array original; devuelve uno nuevo.
 * - Los valores de las claves pueden ser `string` o `number`.
 * - La comparación de strings debe ser lexicográfica (usando `localeCompare` o comparación directa).
 * - Si `criterios` está vacío, devuelve el array sin modificar.
 */
export function ordenarPorMultiplesCriterios(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = ordenarPorMultiplesCriterios;
