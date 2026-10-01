/**
 * Ordenamiento topológico (hard).
 * Source exercise: https://coding-challenges.dev/problems/ordenamiento-topologico
 * Prompt and examples:
 *
 * ## Ordenamiento topológico
 *
 * Dado un número `n` de nodos (numerados del `0` al `n-1`) y una lista de aristas dirigidas `edges` donde cada arista `[a, b]` significa que `a` debe aparecer **antes** que `b`, retorna **un** ordenamiento topológico válido como un array de números.
 *
 * Si el grafo tiene un **ciclo** (no es posible ordenar), retorna un **array vacío** `[]`.
 *
 * > Un ordenamiento topológico válido es cualquier orden donde, para cada arista `[a, b]`, `a` aparece antes que `b` en el resultado.
 *
 * ## Ejemplos
 *
 * ```ts
 * topologicalSort(4, [[0,1],[0,2],[1,3],[2,3]])
 * // Una respuesta válida: [0, 1, 2, 3] o [0, 2, 1, 3]
 *
 * topologicalSort(3, [[0,1],[1,2]])
 * // [0, 1, 2]
 *
 * topologicalSort(2, [[0,1],[1,0]])
 * // [] (ciclo)
 *
 * topologicalSort(1, [])
 * // [0]
 * ```
 *
 * ## Restricciones
 *
 * - `1 <= n <= 1000`
 * - Las aristas no se repiten.
 * - Puede haber nodos sin aristas.
 * - Solo se acepta la respuesta exacta para los casos en que el ordenamiento es **único**. Cuando hay múltiples respuestas válidas, los tests usan grafos con ordenamiento único.
 *
 */
export function topologicalSort(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = topologicalSort;
