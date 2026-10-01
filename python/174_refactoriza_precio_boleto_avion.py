"""Refactoriza: precio de boleto de avión (master).

Source exercise: https://coding-challenges.dev/problems/python-refactoriza-precio-boleto-avion

## Contexto

Tienes una función que calcula el precio final de un boleto de avión según la clase, la distancia, la cantidad de pasajeros y si llevan equipaje. El código funciona, pero está lleno de problemas: números mágicos, variables de una sola letra, lógica duplicada y todo mezclado en una sola función gigante.

Tu tarea es **refactorizarla** aplicando el patrón Strategy (o polimorfismo), extrayendo constantes con nombres descriptivos y separando las responsabilidades en funciones auxiliares.

## Reglas de negocio

- Si `passengers <= 0` o `distance < 100`, retorna `-1`
- Precio base por kilómetro según la clase:
  - `"economy"` → `0.10` por km por pasajero
  - `"business"` → `0.25` por km por pasajero
  - `"first"` → `0.45` por km por pasajero
- Equipaje (`hasLuggage = true`):
  - `"economy"` cobra `30` por pasajero
  - `"business"` y `"first"` incluyen el equipaje (sin cargo adicional)
- Si hay **5 o más pasajeros**, aplica un **10% de descuento** sobre el total

## Firma de la función

```typescript
function calculateFlightTicketPrice(
  passengers: number,
  flightClass: string,
  distance: number,
  hasLuggage: boolean
): number
```

## Ejemplos

```typescript
// 2 pasajeros, economy, 500 km, sin equipaje
calculateFlightTicketPrice(2, "economy", 500, false) // → 100

// 2 pasajeros, economy, 500 km, con equipaje
calculateFlightTicketPrice(2, "economy", 500, true)  // → 160

// 1 pasajero, business, 800 km, sin equipaje
calculateFlightTicketPrice(1, "business", 800, false) // → 200

// 5 pasajeros, economy, 400 km, sin equipaje (descuento grupal)
calculateFlightTicketPrice(5, "economy", 400, false)  // → 180
```"""


def refactoriza_precio_boleto_avion(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = refactoriza_precio_boleto_avion
