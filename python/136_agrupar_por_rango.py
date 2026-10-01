"""Agrupar Números por Rango (medium).

Source exercise: https://coding-challenges.dev/problems/python-agrupar-por-rango

## Agrupar Números por Rango

Escribe una función `agruparPorRango` que reciba un array de números y un tamaño de rango (`rangeSize`). La función debe agrupar los números en un objeto donde las claves son strings con el formato `"min-max"` que representan cada rango, y los valores son arrays con los números que caen en ese rango.

Cada rango cubre el intervalo `[min, max)` (cerrado por la izquierda, abierto por la derecha). El rango comienza desde 0 y avanza en incrementos de `rangeSize`.

## Ejemplos

```typescript
agruparPorRango([1, 5, 12, 3, 8, 15, 7], 5)
// { "0-5": [1, 3], "5-10": [5, 8, 7], "10-15": [12], "15-20": [15] }

agruparPorRango([0, 10, 20, 5], 10)
// { "0-10": [0, 5], "10-20": [10], "20-30": [20] }

agruparPorRango([4], 10)
// { "0-10": [4] }
```

## Restricciones

- `rangeSize` es un número entero positivo mayor a 0.
- Los números del array son enteros no negativos.
- El array puede estar vacío (devuelve `{}`).
- Mantén el orden de aparición de los números dentro de cada grupo.
- Solo incluye en el resultado los rangos que contienen al menos un número.
- No uses librerías externas."""


def group_by_range(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = group_by_range
