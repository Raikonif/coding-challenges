/**
 * Triángulo de Pascal (hard).
 * Source exercise: https://coding-challenges.dev/problems/triangulo-de-pascal
 * Prompt and examples:
 * Dado un entero `n`, genera las primeras `n` filas del **triángulo de Pascal** y devuélvelas como un array de arrays de números.
 *
 * El triángulo de Pascal tiene las siguientes propiedades:
 * - La fila 0 es `[1]`.
 * - Cada elemento interior es la suma de los dos elementos directamente encima de él.
 * - Los bordes de cada fila siempre son `1`.
 *
 * ## Ejemplos
 *
 * ```typescript
 * trianguloPascal(1);
 * // [[1]]
 *
 * trianguloPascal(4);
 * // [
 * //   [1],
 * //   [1, 1],
 * //   [1, 2, 1],
 * //   [1, 3, 3, 1]
 * // ]
 *
 * trianguloPascal(5);
 * // [
 * //   [1],
 * //   [1, 1],
 * //   [1, 2, 1],
 * //   [1, 3, 3, 1],
 * //   [1, 4, 6, 4, 1]
 * // ]
 *
 * trianguloPascal(0);
 * // []
 * ```
 *
 * ## Notas
 *
 * - Si `n` es `0`, devuelve un array vacío `[]`.
 * - `n` siempre será un entero no negativo.
 */
export function trianguloPascal(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = trianguloPascal;
