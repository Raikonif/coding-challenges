/**
 * ¿Es número Fibonacci? (medium).
 * Source exercise: https://coding-challenges.dev/problems/es-numero-fibonacci
 * Prompt and examples:
 * ## ¿Es número Fibonacci?
 *
 * Dado un número entero no negativo, determina si pertenece a la secuencia de Fibonacci.
 *
 * La secuencia de Fibonacci es: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * ### Parámetros
 *
 * - `n`: Un número entero no negativo.
 *
 * ### Valor de retorno
 *
 * `true` si `n` es un número de Fibonacci, `false` en caso contrario.
 *
 * ### Ejemplos
 *
 * ```typescript
 * isFibonacci(0);  // true  (F(0) = 0)
 * isFibonacci(1);  // true  (F(1) = 1)
 * isFibonacci(8);  // true  (F(6) = 8)
 * isFibonacci(10); // false
 * isFibonacci(21); // true  (F(8) = 21)
 * ```
 *
 * ### Pista
 *
 * Un número `n` es Fibonacci si y solo si `5*n*n + 4` o `5*n*n - 4` es un cuadrado perfecto.
 */
export function isFibonacci(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = isFibonacci;
