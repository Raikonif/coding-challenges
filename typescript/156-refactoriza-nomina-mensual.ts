/**
 * Refactoriza: nómina mensual (hard).
 * Source exercise: https://coding-challenges.dev/problems/refactoriza-nomina-mensual
 * Prompt and examples:
 * ## Contexto
 *
 * Eres un desarrollador en una empresa de recursos humanos. El sistema de nómina fue escrito por alguien con prisa y tiene una función que mezcla demasiadas responsabilidades: calcula el salario bruto, aplica bonificaciones por categoría, determina el impuesto progresivo y finalmente retorna el salario neto.
 *
 * ## Lo que debes hacer
 *
 * Refactoriza la función `calculateMonthlySalary` para que sea **legible, mantenible y bien estructurada**:
 *
 * - Elimina los **números mágicos** — extrae constantes con nombres descriptivos en `UPPER_SNAKE_CASE`
 * - Elimina las **variables de una sola letra** — usa nombres que comuniquen intención
 * - **Extrae funciones auxiliares** — separa el cálculo del bruto, bono, impuesto y neto en funciones con responsabilidad única
 * - Mantén exactamente el mismo comportamiento: mismas entradas, mismas salidas
 *
 * ## Reglas de negocio
 *
 * - Si las horas o la tarifa son inválidas (≤ 0), retorna `-1`
 * - Bonificación por categoría: `"senior"` → +20%, `"mid"` → +10%, `"junior"` → sin bono
 * - Impuesto progresivo sobre el total (bruto + bono):
 *   - Si total > 5000 → 25%
 *   - Si total > 2000 → 15%
 *   - En otro caso → 8%
 * - Retorna el salario neto redondeado a 2 decimales
 */
export function refactorizaNominaMensual(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = refactorizaNominaMensual;
