/**
 * Compuertas lógicas (hard).
 * Source exercise: https://coding-challenges.dev/problems/compuertas-logicas
 * Prompt and examples:
 * Dados dos booleanos `a` y `b`, y el nombre de una compuerta lógica, aplica la operación y devuelve el resultado.
 *
 * Compuertas soportadas: `"AND"`, `"OR"`, `"XOR"`, `"NAND"`.
 *
 * - **XOR**: verdadero solo si los valores son distintos.
 * - **NAND**: negación de AND.
 *
 * ### Ejemplo
 *
 * ```
 * logicGate(true,  false, "AND")  → false
 * logicGate(true,  false, "OR")   → true
 * logicGate(true,  true,  "XOR")  → false
 * logicGate(false, false, "NAND") → true
 * ```
 */
export function logicGate(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = logicGate;
