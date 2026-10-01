/**
 * Refactoriza el cálculo de descuentos (medium).
 * Source exercise: https://coding-challenges.dev/problems/refactoriza-calculo-descuentos
 * Prompt and examples:
 * Implementa la función `calculateOrderDiscount` que calcula el precio final de un pedido aplicando descuentos según el tipo de membresía del cliente.
 *
 * **Reglas de negocio:**
 *
 * | Membresía | Subtotal ≥ 100 | Subtotal < 100 |
 * |-----------|----------------|----------------|
 * | `"gold"`   | 20% descuento  | 10% descuento  |
 * | `"silver"` | 10% descuento  | 5% descuento   |
 * | otros      | sin descuento  | sin descuento  |
 *
 * > Retorna `-1` si el subtotal del pedido es menor a `10`.
 *
 * ## Tipos
 *
 * ```typescript
 * interface OrderItem {
 *   price: number;
 *   quantity: number;
 * }
 * ```
 *
 * ## Comportamiento esperado
 *
 * ```typescript
 * calculateOrderDiscount([{ price: 50, quantity: 2 }], "gold")   // 80
 * calculateOrderDiscount([{ price: 30, quantity: 2 }], "gold")   // 54
 * calculateOrderDiscount([{ price: 50, quantity: 2 }], "silver") // 90
 * calculateOrderDiscount([{ price: 20, quantity: 2 }], "silver") // 38
 * calculateOrderDiscount([{ price: 5,  quantity: 1 }], "gold")   // -1
 * calculateOrderDiscount([{ price: 50, quantity: 1 }], "bronze") // 50
 * ```
 *
 * ## Requisitos de calidad
 *
 * Al enviar, tu código será evaluado también en estos criterios:
 *
 * - **Sin números mágicos** — extrae los porcentajes y umbrales como constantes con nombres descriptivos
 * - **Sin variables de una sola letra** — usa nombres que expresen la intención (`items`, `subtotal`, `discount`, etc.)
 * - **Constantes en UPPER_SNAKE_CASE** — al menos una constante nombrada así (ej: `MIN_ORDER_AMOUNT`)
 * - **Al menos una función auxiliar** — extrae lógica en funciones con responsabilidad única
 */
export function calculateOrderDiscount(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = calculateOrderDiscount;
