/**
 * Formatear precio (medium).
 * Source exercise: https://coding-challenges.dev/problems/formatear-precio
 * Prompt and examples:
 * ## Formatear precio
 *
 * Dada una cantidad numérica, devuelve una cadena con formato de precio en dólares.
 *
 * El formato debe seguir estas reglas:
 * - Usar el símbolo `$` al inicio
 * - Mostrar siempre exactamente **2 decimales**
 * - Los números negativos deben mostrar el signo negativo **antes** del símbolo `$`
 * - Usar separador de miles con coma (`,`) para números de 4+ dígitos
 *
 * ## Ejemplos
 *
 * ```
 * formatPrice(10)        → "$10.00"
 * formatPrice(9.5)       → "$9.50"
 * formatPrice(1234.567)  → "$1,234.57"
 * formatPrice(0)         → "$0.00"
 * formatPrice(-5.3)      → "-$5.30"
 * ```
 *
 * ## Notas
 *
 * - Redondear a 2 decimales usando redondeo estándar (`.toFixed(2)`)
 * - Para negativos, el formato es `-$X.XX`
 *
 */
export function formatPrice(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = formatPrice;
