/**
 * Refactoriza: tarifa de taxi (medium).
 * Source exercise: https://coding-challenges.dev/problems/refactoriza-tarifa-taxi
 * Prompt and examples:
 * ## Contexto
 *
 * Tienes una función que calcula la tarifa de un viaje en taxi, pero está llena de números mágicos, variables de una sola letra y lógica anidada difícil de leer.
 *
 * ## Tu tarea
 *
 * Refactoriza la función `calculateTaxiFare` para que:
 *
 * 1. **Elimines los números mágicos** — extrae constantes con nombres descriptivos en `UPPER_SNAKE_CASE` (ej: `BASE_FARE`, `RATE_PER_KM`, `NIGHT_MULTIPLIER`)
 * 2. **Renombres las variables** — usa nombres que expresen su intención, no letras sueltas
 * 3. **Extraigas funciones auxiliares** — separa la lógica de recargo nocturno, recargo por pasajeros extra, y tarifa mínima en funciones propias
 *
 * ## Reglas del negocio
 *
 * - La tarifa base es **2.50**
 * - La tarifa por kilómetro es **1.20**
 * - Horario nocturno (antes de las 6:00 o desde las 22:00): el recargo por kilómetro aumenta **50%**
 * - Más de 4 pasajeros: se suma **0.30** por cada pasajero adicional
 * - La tarifa mínima siempre es **5.00**
 */
export function refactorizaTarifaTaxi(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = refactorizaTarifaTaxi;
