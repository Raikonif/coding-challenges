/**
 * Extraer claves (easy).
 * Source exercise: https://coding-challenges.dev/problems/extraer-claves
 * Prompt and examples:
 * ## Extraer claves
 *
 * Dado un objeto, devuelve un array con todas sus claves (propiedades) en el orden en que aparecen en el objeto.
 *
 * ### Ejemplos
 *
 * ```typescript
 * extractKeys({ nombre: "Ana", edad: 25 });       // ["nombre", "edad"]
 * extractKeys({ x: 1, y: 2, z: 3 });              // ["x", "y", "z"]
 * extractKeys({});                                  // []
 * extractKeys({ a: true });                         // ["a"]
 * ```
 *
 * ### Restricciones
 *
 * - El argumento siempre será un objeto (nunca `null` ni `undefined`).
 * - El objeto puede estar vacío.
 */
export function extractKeys(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = extractKeys;
