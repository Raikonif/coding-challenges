/**
 * Resumir transacciones por categoría (hard).
 * Source exercise: https://coding-challenges.dev/problems/resumir-transacciones-por-categoria
 * Prompt and examples:
 * Se te proporciona un array de transacciones. Cada transacción tiene la forma:
 *
 * ```ts
 * type Transaction = {
 *   category: string;
 *   amount: number;
 * };
 * ```
 *
 * Implementa una función que agrupe las transacciones por `category` y, para cada categoría, calcule:
 * - `total`: suma de todos los montos.
 * - `count`: número de transacciones.
 * - `average`: promedio de los montos (redondeado a **2 decimales**).
 *
 * El resultado debe ser un objeto donde cada clave es el nombre de la categoría.
 *
 * ## Ejemplo
 *
 * ```ts
 * const transactions = [
 *   { category: "comida", amount: 20 },
 *   { category: "transporte", amount: 15 },
 *   { category: "comida", amount: 30 },
 *   { category: "transporte", amount: 5 },
 *   { category: "ocio", amount: 50 },
 * ];
 *
 * summarizeByCategory(transactions)
 * // → {
 * //   comida:     { total: 50,  count: 2, average: 25 },
 * //   transporte: { total: 20,  count: 2, average: 10 },
 * //   ocio:       { total: 50,  count: 1, average: 50 }
 * // }
 * ```
 *
 * ## Notas
 *
 * - Si el array está vacío, retorna un objeto vacío `{}`.
 * - El `average` debe redondearse a máximo 2 decimales usando `Math.round` o equivalente.
 * - El orden de las claves en el objeto de salida no importa.
 */
export function summarizeByCategory(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = summarizeByCategory;
