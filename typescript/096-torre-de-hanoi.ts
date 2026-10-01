/**
 * Torre de Hanoi (master).
 * Source exercise: https://coding-challenges.dev/problems/torre-de-hanoi
 * Prompt and examples:
 * ## Torre de Hanoi
 *
 * La Torre de Hanoi es un problema clásico de recursión. Tienes 3 torres (identificadas como `"A"`, `"B"` y `"C"`) y `n` discos de distintos tamaños apilados en la torre `"A"` de mayor a menor (el más grande abajo).
 *
 * El objetivo es mover todos los discos de la torre de origen a la torre de destino, usando la torre auxiliar, siguiendo estas reglas:
 *
 * 1. Solo puedes mover un disco a la vez.
 * 2. Solo puedes tomar el disco de arriba de una torre.
 * 3. No puedes colocar un disco más grande sobre uno más pequeño.
 *
 * Debes devolver un array con los movimientos realizados. Cada movimiento es un array de dos strings: `[origen, destino]`.
 *
 * ### Ejemplos
 *
 * ```typescript
 * torreDeHanoi(1, "A", "C", "B")
 * // [["A", "C"]]
 *
 * torreDeHanoi(2, "A", "C", "B")
 * // [["A", "B"], ["A", "C"], ["B", "C"]]
 *
 * torreDeHanoi(3, "A", "C", "B")
 * // [["A", "C"], ["A", "B"], ["C", "B"], ["A", "C"], ["B", "A"], ["B", "C"], ["A", "C"]]
 * ```
 *
 * ### Parámetros
 *
 * - `n`: Número de discos (entero positivo).
 * - `origen`: Torre de origen (string).
 * - `destino`: Torre de destino (string).
 * - `auxiliar`: Torre auxiliar (string).
 *
 * ### Restricciones
 *
 * - `1 <= n <= 10`
 * - El número total de movimientos siempre es `2^n - 1`.
 */
export function torreDeHanoi(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = torreDeHanoi;
