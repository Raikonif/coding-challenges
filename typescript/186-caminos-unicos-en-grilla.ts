/**
 * Caminos únicos en grilla (hard).
 * Source exercise: https://coding-challenges.dev/problems/caminos-unicos-en-grilla
 * Prompt and examples:
 *
 * ## Descripción
 *
 * Imagina una grilla de `rows` filas y `columns` columnas. Estás en la celda **superior izquierda** (posición `[0, 0]`) y quieres llegar a la celda **inferior derecha** (posición `[rows-1, columns-1]`).
 *
 * La regla es simple: en cada paso solo puedes moverte **→ hacia la derecha** o **↓ hacia abajo**.
 *
 * ¿Cuántos caminos diferentes existen para llegar al destino?
 *
 * ## Visualización
 *
 * Para una grilla **3×3**, los 6 caminos posibles son:
 *
 * ```
 * → → ↓     → ↓ ·     → ↓ ·     ↓ · ·     ↓ · ·     ↓ · ·
 * · · ↓     · → ↓     · ↓ ·     → → ↓     → ↓ ·     ↓ · ·
 * · · ★     · · ★     · → ★     · · ★     · → ★     → → ★
 * ```
 *
 * Cada fila representa un camino distinto desde `[0,0]` hasta `★`.
 *
 * ## Ejemplos
 *
 * ```typescript
 * uniquePaths(1, 1) // 1 — ya estás en el destino
 * uniquePaths(2, 2) // 2 — (→↓) o (↓→)
 * uniquePaths(3, 3) // 6
 * uniquePaths(3, 7) // 28
 * ```
 *
 * ## Pista
 *
 * Piensa en esto: para llegar a cualquier celda `[i, j]`, solo puedes venir:
 * - **desde arriba** → celda `[i-1, j]`
 * - **desde la izquierda** → celda `[i, j-1]`
 *
 * ¿Cómo puedes usar eso para construir la solución de forma incremental?
 *
 * ## Notas
 *
 * - Usa **programación dinámica** para una solución eficiente.
 * - `rows` y `columns` son enteros positivos.
 * - Una grilla de `1×N` o `M×1` solo tiene **un camino posible** (recto).
 *
 */
export function uniquePaths(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = uniquePaths;
