/**
 * Aplanar objeto (master).
 * Source exercise: https://coding-challenges.dev/problems/aplanar-objeto
 * Prompt and examples:
 * Dado un objeto con posibles propiedades anidadas, devuelve un nuevo objeto **plano** donde las claves anidadas se unen con puntos (`.`).
 *
 * ### Ejemplo
 *
 * ```
 * flattenObject({ a: 1, b: { c: 2, d: 3 } })  → { "a": 1, "b.c": 2, "b.d": 3 }
 * flattenObject({ x: { y: { z: 1 } } })        → { "x.y.z": 1 }
 * flattenObject({ a: 1, b: 2 })                → { "a": 1, "b": 2 }
 * ```
 */
export function flattenObject(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = flattenObject;
