/**
 * Validar árbol binario de búsqueda (hard).
 * Source exercise: https://coding-challenges.dev/problems/validar-arbol-binario-busqueda
 * Prompt and examples:
 * ## Descripción
 *
 * Dado un árbol binario representado como un array en orden de nivel (BFS), determina si es un **árbol binario de búsqueda (BST) válido**.
 *
 * Un árbol binario de búsqueda válido cumple:
 * - El subárbol izquierdo de un nodo contiene **solo nodos con valores menores** al nodo.
 * - El subárbol derecho de un nodo contiene **solo nodos con valores mayores** al nodo.
 * - Tanto el subárbol izquierdo como el derecho también deben ser BST válidos.
 *
 * ## Representación del array
 *
 * El array sigue el formato de recorrido por niveles (BFS):
 * - El índice `0` es la raíz.
 * - Para el nodo en índice `i`, su hijo izquierdo está en `2*i + 1` y su hijo derecho en `2*i + 2`.
 * - El valor `null` indica que ese nodo no existe.
 *
 * ## Ejemplos
 *
 * ### Ejemplo 1
 * ```
 *      5
 *     / \
 *    3   7
 *   / \
 *  2   4
 * ```
 * ```typescript
 * validateBST([5, 3, 7, 2, 4]) // true
 * ```
 *
 * ### Ejemplo 2
 * ```
 *      5
 *     / \
 *    3   7
 *   / \
 *  2   6
 * ```
 * ```typescript
 * validateBST([5, 3, 7, 2, 6]) // false — el 6 está en el subárbol izquierdo de 5 pero es mayor que 5
 * ```
 *
 * ### Ejemplo 3
 * ```typescript
 * validateBST([]) // true — árbol vacío es válido
 * validateBST([1]) // true — un solo nodo es válido
 * ```
 *
 * ## Notas
 *
 * - Los valores `null` en el array representan nodos ausentes; sus posiciones hijas también se ignoran.
 * - Los valores en el árbol son números enteros que pueden ser negativos.
 * - No habrá valores duplicados en el árbol.
 */
export function validateBST(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = validateBST;
