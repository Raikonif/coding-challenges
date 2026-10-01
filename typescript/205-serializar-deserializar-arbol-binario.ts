/**
 * Serializar y deserializar árbol binario (master).
 * Source exercise: https://coding-challenges.dev/problems/serializar-deserializar-arbol-binario
 * Prompt and examples:
 * ## Serializar y deserializar árbol binario
 *
 * Implementa dos funciones:
 *
 * - **`serialize(root)`** — convierte un árbol binario en una cadena de texto.
 * - **`deserialize(data)`** — reconstruye el árbol binario a partir de esa cadena.
 *
 * Para verificar el viaje de ida y vuelta, la función exportada `serializeDeserialize` recibe un array en **orden por niveles** (BFS), donde `null` representa un nodo ausente. Debe:
 *
 * 1. Construir el árbol binario a partir del array.
 * 2. Serializarlo a string con `serialize`.
 * 3. Deserializarlo de vuelta con `deserialize`.
 * 4. Retornar el array en orden por niveles del árbol reconstruido (omitiendo los `null` del final).
 *
 * ### Ejemplo
 *
 * ```
 * Entrada: [1, 2, 3, null, null, 4, 5]
 *
 * Árbol:
 *         1
 *        / \
 *       2   3
 *          / \
 *         4   5
 *
 * Salida: [1, 2, 3, null, null, 4, 5]
 * ```
 *
 * ### Notas
 *
 * - El formato de serialización es libre, siempre que `serialize` y `deserialize` sean inversas entre sí.
 * - Los valores de los nodos son enteros.
 * - El árbol puede tener hasta 1000 nodos.
 * - Un array de entrada `[]` representa un árbol vacío; retornar `[]`.
 * - Los `null` **al final** del array de salida deben omitirse.
 */
export function serializarDeserializarArbolBinario(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = serializarDeserializarArbolBinario;
