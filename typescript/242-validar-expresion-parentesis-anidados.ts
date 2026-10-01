/**
 * Validar expresión de paréntesis anidados (hard).
 * Source exercise: https://coding-challenges.dev/problems/validar-expresion-parentesis-anidados
 * Prompt and examples:
 *
 * ## Validar expresión de paréntesis anidados
 *
 * Implementa una función que, dado un string con paréntesis, corchetes y llaves, determine si la expresión está **correctamente balanceada**.
 *
 * Una expresión está balanceada si:
 * - Cada apertura tiene su cierre correspondiente del mismo tipo.
 * - Los pares están correctamente anidados (no se cruzan).
 * - No hay cierres sin apertura previa.
 *
 * ### Tipos de brackets válidos
 *
 * | Apertura | Cierre |
 * |----------|--------|
 * | `(`      | `)`    |
 * | `[`      | `]`    |
 * | `{`      | `}`    |
 *
 * ### Ejemplo
 *
 * ```typescript
 * validarParentesis("({[]})") // true
 * validarParentesis("([)]")   // false — se cruzan
 * validarParentesis("{[}")     // false — falta cierre de [
 * validarParentesis("")        // true — vacío es válido
 * ```
 *
 * ### Notas
 *
 * - El string puede contener otros caracteres además de brackets; ignóralos.
 * - Un string vacío se considera válido.
 *
 */
export function validarParentesis(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = validarParentesis;
