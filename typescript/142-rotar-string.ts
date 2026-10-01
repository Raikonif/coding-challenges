/**
 * Rotar string (medium).
 * Source exercise: https://coding-challenges.dev/problems/rotar-string
 * Prompt and examples:
 * Dado un string y un número `k`, devuelve el string rotado `k` posiciones hacia la **izquierda**.
 *
 * Rotar a la izquierda significa que los primeros `k` caracteres se mueven al final.
 *
 * ## Ejemplos
 *
 * ```typescript
 * rotateString("abcde", 2)   // "cdeab"
 * rotateString("hello", 1)   // "elloh"
 * rotateString("abcde", 0)   // "abcde"
 * rotateString("abc", 6)     // "abc"  (6 % 3 = 0)
 * ```
 *
 * ## Notas
 *
 * - Si el string está vacío o `k` es 0, devuelve el string original.
 * - Si `k` es mayor que la longitud del string, usa el módulo para calcular la rotación efectiva.
 * - No se permite usar métodos de rotación directos de otras librerías.
 */
export function rotateString(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = rotateString;
