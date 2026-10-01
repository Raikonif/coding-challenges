"""Refactoriza: costo de envío (hard).

Source exercise: https://coding-challenges.dev/problems/python-refactoriza-costo-envio

Implementa la función `calculateShippingCost` que calcula el costo de envío de un paquete según su peso, distancia y zona de entrega.

**Reglas de negocio:**

| Zona        | Rango típico (referencia) | Precio base (por kg) | Recargo (por km) |
|-------------|--------------------------|----------------------|------------------|
| `"local"`    | < 50 km                  | $2 / kg             | $0.10 / km       |
| `"regional"` | 50 – 200 km              | $5 / kg             | $0.05 / km       |
| `"nacional"` | > 200 km                 | $10 / kg            | $0.02 / km       |

> La zona siempre llega como parámetro — no necesitas derivarla ni validarla desde la distancia.

- Si el peso es **igual o menor a 0**, retorna `-1`
- Si la distancia es **igual o menor a 0**, retorna `-1`
- Si el peso supera los **20 kg**, se aplica un **10% de descuento** sobre el costo total
- El resultado se redondea a **2 decimales**

## Comportamiento esperado

```typescript
calculateShippingCost(5,  30,  "local")    // 13.00
calculateShippingCost(10, 100, "regional") // 55.00
calculateShippingCost(25, 200, "nacional") // 228.60
calculateShippingCost(30, 500, "nacional") // 279.00
calculateShippingCost(0,  50,  "local")    // -1
calculateShippingCost(5,  -10, "regional") // -1
```

## Requisitos de calidad

Al enviar, tu código será evaluado también en estos criterios:

- **Sin números mágicos** — extrae precios, recargos, umbrales y el descuento como constantes con nombres descriptivos
- **Sin variables de una sola letra** — usa nombres que expresen la intención (`weight`, `distance`, `zone`, etc.)
- **Constantes en UPPER_SNAKE_CASE** — al menos una constante nombrada así (ej: `HEAVY_PACKAGE_THRESHOLD`)
- **Al menos una función auxiliar** — extrae lógica en funciones con responsabilidad única (ej: calcular costo base, aplicar descuento)"""


def calculate_shipping_cost(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = calculate_shipping_cost
