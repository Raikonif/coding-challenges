"""Refactoriza: precio final de producto (medium).

Source exercise: https://coding-challenges.dev/problems/python-refactoriza-precio-final-producto

Implementa la función `getProductFinalPrice` que calcula el precio final de un producto aplicando un descuento según su categoría y luego el impuesto correspondiente.

**Reglas de negocio:**

| Categoría      | Descuento |
|----------------|-----------|
| `"electronics"` | 15%       |
| `"clothing"`    | 20%       |
| `"food"`        | 5%        |
| otras          | 0%        |

- Sobre el precio con descuento, se aplica un impuesto del **21%**
- Retorna `-1` si el stock es **0 o menor**
- Retorna `-1` si el precio es **0 o menor**
- El resultado se redondea a **2 decimales**

## Comportamiento esperado

```typescript
getProductFinalPrice(100, "electronics", 10) // 102.85
getProductFinalPrice(50,  "clothing",    5)  // 48.40
getProductFinalPrice(20,  "food",        3)  // 22.99
getProductFinalPrice(100, "sports",      2)  // 121.00
getProductFinalPrice(100, "electronics", 0)  // -1
getProductFinalPrice(0,   "food",        5)  // -1
```

## Requisitos de calidad

Al enviar, tu código será evaluado también en estos criterios:

- **Sin números mágicos** — extrae los porcentajes y la tasa de impuesto como constantes con nombres descriptivos
- **Sin variables de una sola letra** — usa nombres que expresen la intención (`price`, `discount`, `taxRate`, etc.)
- **Constantes en UPPER_SNAKE_CASE** — al menos una constante nombrada así (ej: `TAX_RATE`)
- **Al menos una función auxiliar** — extrae lógica en funciones con responsabilidad única"""


def get_product_final_price(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = get_product_final_price
