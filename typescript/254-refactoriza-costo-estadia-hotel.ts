/**
 * Refactoriza: costo de estadía en hotel (medium).
 * Source exercise: https://coding-challenges.dev/problems/null
 * Prompt and examples:
 * ## Descripción
 *
 * Se te entrega una función que calcula el costo total de una estadía en un hotel. La función recibe el número de noches, el tipo de habitación, si la estadía incluye fines de semana y el nivel de lealtad del cliente.
 *
 * El código funciona, pero está lleno de malos olores: números mágicos, variables de una sola letra, condicionales anidados y toda la lógica mezclada en una sola función.
 *
 * ## Tu tarea
 *
 * Refactoriza la función `calculate_hotel_stay_cost` para que:
 *
 * 1. **Elimine los números mágicos** — define constantes con nombres descriptivos en `UPPER_SNAKE_CASE`
 * 2. **Use nombres de variables descriptivos** — nada de `a`, `b`, `t`, `d`, `r`, etc.
 * 3. **Extraiga funciones auxiliares** — al menos una función que ayude a calcular partes del costo
 * 4. **Mantenga el mismo comportamiento** — todos los casos de prueba deben seguir pasando
 *
 * ## Reglas de negocio
 *
 * - Tipos de habitación: `"standard"` (80/noche), `"deluxe"` (150/noche), `"suite"` (250/noche)
 * - Fin de semana agrega un **20% de recargo** sobre el precio base
 * - Nivel de lealtad aplica descuento: `"silver"` → 5%, `"gold"` → 10%, `"platinum"` → 15%
 * - Si el número de noches es menor a 1, retorna `-1`
 */
export function refactorizaCostoEstadiaHotel(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = refactorizaCostoEstadiaHotel;
