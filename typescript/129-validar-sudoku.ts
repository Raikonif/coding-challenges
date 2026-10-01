/**
 * Validar Sudoku (hard).
 * Source exercise: https://coding-challenges.dev/problems/validar-sudoku
 * Prompt and examples:
 * Dada una cuadrícula de Sudoku **9×9** representada como un array de arrays de números, determina si el estado actual es **válido**.
 *
 * ## Reglas de validación
 *
 * - Cada **fila** no debe contener números repetidos del 1 al 9
 * - Cada **columna** no debe contener números repetidos del 1 al 9
 * - Cada uno de los **9 subcuadros 3×3** no debe contener números repetidos del 1 al 9
 *
 * > Las celdas vacías se representan con `0` y **no se validan** — solo se validan los números ya colocados.
 *
 * ## Estructura del input
 *
 * ```
 * [
 *   [5, 3, 0,  0, 7, 0,  0, 0, 0],  // fila 0
 *   [6, 0, 0,  1, 9, 5,  0, 0, 0],  // fila 1
 *   [0, 9, 8,  0, 0, 0,  0, 6, 0],  // fila 2
 *
 *   [8, 0, 0,  0, 6, 0,  0, 0, 3],  // fila 3
 *   [4, 0, 0,  8, 0, 3,  0, 0, 1],  // fila 4
 *   [7, 0, 0,  0, 2, 0,  0, 0, 6],  // fila 5
 *
 *   [0, 6, 0,  0, 0, 0,  2, 8, 0],  // fila 6
 *   [0, 0, 0,  4, 1, 9,  0, 0, 5],  // fila 7
 *   [0, 0, 0,  0, 8, 0,  0, 7, 9],  // fila 8
 * ]
 * ```
 *
 * Los subcuadros 3×3 están delimitados visualmente. Por ejemplo, el subcuadro superior-izquierdo contiene: `5, 3, 0 / 6, 0, 0 / 0, 9, 8`.
 *
 * ## Ejemplos
 *
 * **Ejemplo 1 — tablero válido**
 *
 * ```ts
 * isValidSudoku([
 *   [5,3,0,0,7,0,0,0,0],
 *   [6,0,0,1,9,5,0,0,0],
 *   [0,9,8,0,0,0,0,6,0],
 *   [8,0,0,0,6,0,0,0,3],
 *   [4,0,0,8,0,3,0,0,1],
 *   [7,0,0,0,2,0,0,0,6],
 *   [0,6,0,0,0,0,2,8,0],
 *   [0,0,0,4,1,9,0,0,5],
 *   [0,0,0,0,8,0,0,7,9],
 * ]) // → true
 * ```
 *
 * **Ejemplo 2 — fila con duplicado**
 *
 * ```ts
 * isValidSudoku([
 *   [8,3,0,0,7,0,0,0,8],  // ← el 8 se repite en la fila 0
 *   ...
 * ]) // → false
 * ```
 */
export function isValidSudoku(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = isValidSudoku;
