/**
 * Tipo de dato (easy).
 * Source exercise: https://coding-challenges.dev/problems/tipo-de-dato
 * Prompt and examples:
 * ## Tipo de dato
 *
 * Dado un valor de cualquier tipo, devuelve un string indicando su tipo de forma mas precisa que `typeof`. Las reglas son:
 *
 * - Si es `null`, devuelve `"null"`.
 * - Si es un array, devuelve `"array"`.
 * - Si es un numero (`number`), devuelve `"number"`.
 * - Si es un string, devuelve `"string"`.
 * - Si es un booleano, devuelve `"boolean"`.
 * - Si es `undefined`, devuelve `"undefined"`.
 * - Si es un objeto (que no sea array ni null), devuelve `"object"`.
 *
 * ### Ejemplos
 *
 * ```typescript
 * getType(42)        // "number"
 * getType("hola")    // "string"
 * getType([1, 2])    // "array"
 * getType(null)      // "null"
 * getType({a: 1})    // "object"
 * getType(true)      // "boolean"
 * getType(undefined) // "undefined"
 * ```
 */
export function getType(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = getType;
