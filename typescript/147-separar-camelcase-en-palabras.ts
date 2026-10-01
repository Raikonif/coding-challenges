/**
 * Separar camelCase en palabras (easy).
 * Source exercise: https://coding-challenges.dev/problems/separar-camelcase-en-palabras
 * Prompt and examples:
 * ## Separar camelCase en palabras
 *
 * Dado un string en formato `camelCase`, devuelve un array con cada palabra en minúsculas separada.
 *
 * ### Ejemplos
 *
 * ```ts
 * splitCamelCase("helloWorld")        // ["hello", "world"]
 * splitCamelCase("myVariableName")    // ["my", "variable", "name"]
 * splitCamelCase("getValue")          // ["get", "value"]
 * splitCamelCase("firstName")         // ["first", "name"]
 * ```
 *
 * ### Notas
 *
 * - La primera palabra también empieza en minúscula.
 * - Cada letra mayúscula indica el inicio de una nueva palabra.
 * - El resultado debe contener todas las palabras en minúsculas.
 * - El string de entrada siempre tendrá al menos un carácter.
 */
export function splitCamelCase(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = splitCamelCase;
