/**
 * Redondear número (easy).
 * Source exercise: https://coding-challenges.dev/problems/redondear-numero
 * Prompt and examples:
 * ## Redondear número
 *
 * Dado un número decimal y una cantidad de decimales `n`, devuelve el número redondeado a exactamente `n` decimales.
 *
 * ### Parámetros
 *
 * - `num` (number): El número a redondear.
 * - `decimales` (number): La cantidad de decimales deseados (entero >= 0).
 *
 * ### Valor de retorno
 *
 * - (number): El número redondeado a `n` decimales.
 *
 * ### Ejemplos
 *
 * ```typescript
 * redondearNumero(3.14159, 2) // → 3.14
 * redondearNumero(2.71828, 3) // → 2.718
 * redondearNumero(5.5, 0)     // → 6
 * redondearNumero(1.005, 2)   // → 1.01
 * ```
 *
 * ### Notas
 *
 * - Si `decimales` es 0, devuelve el entero más cercano.
 * - Usa redondeo estándar (0.5 redondea hacia arriba).
 */
export function redondearNumero(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = redondearNumero;
