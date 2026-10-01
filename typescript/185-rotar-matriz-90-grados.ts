/**
 * Rotar matriz 90 grados (medium).
 * Source exercise: https://coding-challenges.dev/problems/rotar-matriz-90-grados
 * Prompt and examples:
 * ## Descripción
 *
 * Dada una matriz cuadrada de N×N, devuelve una **nueva matriz rotada 90 grados en sentido horario**.
 *
 * ## Ejemplos
 *
 * ```typescript
 * rotateMatrix([[1,2],[3,4]])
 * // [[3,1],[4,2]]
 *
 * rotateMatrix([[1,2,3],[4,5,6],[7,8,9]])
 * // [[7,4,1],[8,5,2],[9,6,3]]
 *
 * rotateMatrix([[1]])
 * // [[1]]
 * ```
 *
 * ## Visualización
 *
 * Así se ve la rotación de una matriz 3×3:
 *
 * ```
 *   Original          Rotada 90° ↻
 *
 *   1  2  3          7  4  1
 *   4  5  6    →     8  5  2
 *   7  8  9          9  6  3
 *
 *   ↑ fila 0 →       ← columna 0 ↑
 * ```
 *
 * Cada columna de izquierda a derecha en el original se convierte en una fila de arriba a abajo en el resultado.
 *
 * ```
 * col 0: [1, 4, 7]  →  fila 2: [7, 4, 1]  (invertida)
 * col 1: [2, 5, 8]  →  fila 1: [8, 5, 2]  (invertida)
 * col 2: [3, 6, 9]  →  fila 0: [9, 6, 3]  (invertida)
 * ```
 *
 * ## Notas
 *
 * - No modifiques la matriz original; devuelve una nueva.
 * - La rotación es siempre 90 grados en sentido horario.
 * - La fórmula de rotación: el elemento `[i][j]` pasa a `[j][N-1-i]` en la nueva matriz.
 */
export function rotateMatrix(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = rotateMatrix;
