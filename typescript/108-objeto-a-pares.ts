/**
 * Objeto a pares (medium).
 * Source exercise: https://coding-challenges.dev/problems/objeto-a-pares
 * Prompt and examples:
 * ## Objeto a pares
 *
 * Dado un objeto con claves de tipo string y valores de tipo string o número, devuelve un array de pares `[clave, valor]` ordenados alfabéticamente por clave.
 *
 * ### Parámetros
 *
 * - `obj`: Un objeto con claves string y valores de tipo `string | number`.
 *
 * ### Valor de retorno
 *
 * Un array de arrays, donde cada sub-array contiene dos elementos: la clave y su valor correspondiente. El resultado debe estar ordenado alfabéticamente por la clave.
 *
 * ### Ejemplos
 *
 * ```typescript
 * objectToPairs({ name: "Ana", age: 25 });
 * // [["age", 25], ["name", "Ana"]]
 *
 * objectToPairs({ z: 1, a: 2 });
 * // [["a", 2], ["z", 1]]
 *
 * objectToPairs({});
 * // []
 * ```
 */
export function objectToPairs(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = objectToPairs;
