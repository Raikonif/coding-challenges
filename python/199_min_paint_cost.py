"""Costo mínimo para pintar casas (hard).

Source exercise: https://coding-challenges.dev/problems/python-min-paint-cost

> Adaptado de [Daily Coding Problem](https://www.dailycodingproblem.com).

Este ejercicio fue preguntado por **Facebook**.

Un constructor quiere edificar una fila de N casas, cada una puede pintarse de K colores distintos. Su objetivo es minimizar el costo total asegurándose de que ninguna casa adyacente tenga el mismo color.

Dada una matriz de N filas y K columnas donde el valor en la fila `n` y columna `k` representa el costo de pintar la casa `n` con el color `k`, devuelve el costo mínimo que cumple esta condición.

**Ejemplo:**

```
costs = [
  [1, 2, 3],
  [1, 4, 6],
  [5, 2, 9]
]
```

Devuelve `5` ya que la combinación óptima es: casa 0 con color 0 (costo 1), casa 1 con color 2 (costo 6)... En realidad la mejor combinación es casa 0 → color 0 (1), casa 1 → color 1 (4)... pero casas adyacentes no pueden tener el mismo color. La solución óptima tiene costo `5`.

Bonus: ¿Puedes resolverlo en tiempo O(N × K)?"""


def min_paint_cost(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = min_paint_cost
