/**
 * Pivote de array (medium).
 * Source exercise: https://coding-challenges.dev/problems/pivote-de-array
 * Prompt and examples:
 * ## Pivote de Array
 *
 * Dado un array de enteros, encuentra el índice **pivote** donde la suma de los elementos a su izquierda es igual a la suma de los elementos a su derecha.
 *
 * El elemento en el índice pivote **no cuenta** para ninguna de las dos sumas. Si no existe dicho índice, retorna `-1`.
 *
 * Si hay múltiples pivotes, retorna el primero (el de menor índice).
 *
 * ### Parámetros
 *
 * - `nums`: Un array de enteros (puede contener negativos).
 *
 * ### Valor de retorno
 *
 * El índice pivote, o `-1` si no existe.
 *
 * ### Ejemplos
 *
 * ```typescript
 * pivoteDeArray([1, 7, 3, 6, 5, 6]); // 3
 * // izquierda: 1+7+3 = 11, derecha: 5+6 = 11 ✓
 *
 * pivoteDeArray([1, 2, 3]);           // -1
 * // ningún índice cumple la condición
 *
 * pivoteDeArray([2, 1, -1]);          // 0
 * // izquierda: (vacío) = 0, derecha: 1+(-1) = 0 ✓
 *
 * pivoteDeArray([0, 0, 0, 0]);        // 0
 * // izquierda: (vacío) = 0, derecha: 0+0+0 = 0 ✓
 * ```
 *
 * ### Pista
 *
 * Puedes calcular la suma total del array y luego recorrerlo manteniendo una suma acumulada a la izquierda. Para cada índice, la suma derecha es `total - sumaIzquierda - nums[i]`.
 */
export function pivoteDeArray(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = pivoteDeArray;
