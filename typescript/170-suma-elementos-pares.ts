/**
 * Suma de elementos pares (easy).
 * Source exercise: https://coding-challenges.dev/problems/suma-elementos-pares
 * Prompt and examples:
 * Dado un array de números enteros, devuelve la suma de **únicamente los elementos pares**.
 *
 * Si el array está vacío o no contiene números pares, devuelve `0`.
 *
 * ## Ejemplos
 *
 * ```typescript
 * sumaElementosPares([1, 2, 3, 4, 5, 6]); // 12  (2 + 4 + 6)
 * sumaElementosPares([1, 3, 5, 7]);         // 0   (ningún par)
 * sumaElementosPares([]);                   // 0   (array vacío)
 * sumaElementosPares([0, -2, 4]);           // 2   (0 + (-2) + 4)
 * ```
 *
 * ## Notas
 *
 * - Un número es par si el residuo de dividirlo entre 2 es igual a 0 (`n % 2 === 0`).
 * - El cero (`0`) se considera un número par.
 * - Los números negativos también pueden ser pares.
 */
export function sumaElementosPares(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = sumaElementosPares;
