/**
 * Número de Armstrong (easy).
 * Source exercise: https://coding-challenges.dev/problems/numero-de-armstrong
 * Prompt and examples:
 * ## Número de Armstrong
 *
 * Un **número de Armstrong** (también llamado número narcisista) es un número que es igual a la suma de sus propios dígitos, cada uno elevado a la potencia del número total de dígitos.
 *
 * Por ejemplo, `153` tiene 3 dígitos, y:
 * ```
 * 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
 * ```
 *
 * Escribe una función que reciba un número entero positivo y retorne `true` si es un número de Armstrong, o `false` en caso contrario.
 *
 * ## Ejemplos
 *
 * ```ts
 * esArmstrong(153) // true  → 1³ + 5³ + 3³ = 153
 * esArmstrong(370) // true  → 3³ + 7³ + 0³ = 370
 * esArmstrong(9)   // true  → 9¹ = 9
 * esArmstrong(10)  // false → 1¹ + 0¹ ≠ 10
 * esArmstrong(123) // false → 1³ + 2³ + 3³ = 36 ≠ 123
 * ```
 *
 * ## Notas
 *
 * - El número siempre será un entero positivo mayor que 0.
 * - Los números de un solo dígito (1-9) siempre son números de Armstrong.
 */
export function esArmstrong(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = esArmstrong;
