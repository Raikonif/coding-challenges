/**
 * Evaluar expresión booleana (master).
 * Source exercise: https://coding-challenges.dev/problems/evaluar-expresion-booleana
 * Prompt and examples:
 * Dada una expresión booleana como array de tokens (`"true"`, `"false"`, `"AND"`, `"OR"`), evalúala de **izquierda a derecha** y devuelve el resultado.
 *
 * Los tokens alternan entre valores (`"true"` / `"false"`) y operadores (`"AND"` / `"OR"`).
 *
 * ### Ejemplo
 *
 * ```
 * evaluateExpression(["true", "AND", "false"])              → false
 * evaluateExpression(["true", "OR", "false"])               → true
 * evaluateExpression(["true", "AND", "true", "OR", "false"])→ true
 * evaluateExpression(["false", "OR", "false", "AND", "true"])→ false
 * ```
 */
export function evaluateExpression(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = evaluateExpression;
