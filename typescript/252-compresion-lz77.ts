/**
 * Compresión LZ77 (master).
 * Source exercise: https://coding-challenges.dev/problems/null
 * Prompt and examples:
 * ## Compresión LZ77
 *
 * El algoritmo **LZ77** es la base de formatos de compresión modernos como ZIP, GZIP y PNG. Funciona dividiendo la entrada en tokens que referencian coincidencias previas o introducen nuevos caracteres.
 *
 * ### Cómo funciona
 *
 * LZ77 mantiene dos zonas en memoria:
 * - **Ventana de búsqueda** (`search_window`): los últimos N caracteres ya procesados.
 * - **Buffer lookahead** (`lookahead_buffer`): los próximos caracteres a comprimir.
 *
 * En cada paso, busca la coincidencia más larga entre el inicio del lookahead buffer y alguna subcadena dentro de la ventana de búsqueda. Emite un token:
 *
 * ```
 * (offset, length, next_char)
 * ```
 *
 * - `offset`: distancia hacia atrás en la ventana donde empieza la coincidencia (0 si no hay).
 * - `length`: longitud de la coincidencia (0 si no hay).
 * - `next_char`: el siguiente carácter **después** de la coincidencia.
 *
 * El puntero avanza `length + 1` posiciones.
 *
 * ### Ejemplo
 *
 * ```
 * text = "abcabcabc"
 * window_size = 6, lookahead_size = 4
 * ```
 *
 * Tokens esperados:
 * ```python
 * [
 *   (0, 0, 'a'),   # 'a' no tiene coincidencia previa
 *   (0, 0, 'b'),   # 'b' tampoco
 *   (0, 0, 'c'),   # 'c' tampoco
 *   (3, 3, 'a'),   # "abc" coincide 3 posiciones atrás, longitud 3, siguiente='a'
 *   (3, 2, 'c'),   # "ab" coincide 3 posiciones atrás, longitud 2, siguiente='c'
 * ]
 * ```
 *
 * ### Restricciones
 *
 * - `1 <= len(text) <= 500`
 * - `1 <= window_size <= 255`
 * - `1 <= lookahead_size <= 255`
 * - El texto puede contener cualquier carácter ASCII imprimible.
 * - Cuando hay varias coincidencias de igual longitud máxima, elige la que tenga el **mayor offset** (la más reciente en la ventana).
 * - Si el lookahead buffer tiene exactamente un carácter y no hay coincidencia previa, emite `(0, 0, char)`.
 * - El último token siempre emite el último carácter de `text` como `next_char` (aunque sea el carácter final).
 *
 * ### Función a implementar
 *
 * ```python
 * def lz77_compress(text: str, window_size: int, lookahead_size: int) -> list[tuple[int, int, str]]:
 * ```
 *
 * Retorna la lista de tokens en orden de procesamiento.
 */
export function compresionLz77(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = compresionLz77;
