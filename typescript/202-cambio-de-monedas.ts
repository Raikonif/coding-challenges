/**
 * Cambio de monedas (master).
 * Source exercise: https://coding-challenges.dev/problems/cambio-de-monedas
 * Prompt and examples:
 * ## Cambio de monedas
 *
 * Dado un array de denominaciones de monedas `coins` y un monto objetivo `amount`, devuelve el **número mínimo de monedas** necesarias para completar ese monto.
 *
 * Si no es posible completar el monto con las monedas disponibles, devuelve `-1`.
 *
 * Puedes usar cada moneda **tantas veces como necesites**.
 *
 * ## Ejemplos
 *
 * ```
 * entrada: coins = [1, 5, 11], amount = 15
 * salida: 3
 * // 5 + 5 + 5 = 15 (3 monedas)
 * // No usar 11 + 1 + 1 + 1 + 1 = 15 (5 monedas)
 * ```
 *
 * ```
 * entrada: coins = [2], amount = 3
 * salida: -1
 * // No hay forma de completar 3 con solo monedas de 2.
 * ```
 *
 * ```
 * entrada: coins = [1], amount = 0
 * salida: 0
 * // No se necesitan monedas para completar 0.
 * ```
 *
 * ```
 * entrada: coins = [1, 2, 5], amount = 11
 * salida: 3
 * // 5 + 5 + 1 = 11 (3 monedas)
 * ```
 *
 * ## Restricciones
 *
 * - `1 <= coins.length <= 12`
 * - `1 <= coins[i] <= 2^31 - 1`
 * - `0 <= amount <= 10_000`
 *
 * ## Pista
 *
 * Usa **programación dinámica**. Define `dp[i]` como el número mínimo de monedas para completar el monto `i`. Inicializa `dp[0] = 0` y el resto con infinito. Para cada monto de 1 a `amount`, prueba cada moneda y actualiza si encuentras una combinación mejor.
 */
export function cambioDeMonedas(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = cambioDeMonedas;
