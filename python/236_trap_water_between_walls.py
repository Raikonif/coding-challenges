"""Trampa de agua entre paredes (hard).

Source exercise: https://coding-challenges.dev/problems/python-trap-water-between-walls

> Adaptado de [Daily Coding Problem](https://www.dailycodingproblem.com).

Dada una lista de enteros no negativos que representan un mapa de elevación en dos dimensiones, donde cada elemento es una pared de ancho unitario y el entero es su altura, calcula cuántas unidades de agua quedan atrapadas después de la lluvia.

El algoritmo debe ejecutarse en tiempo O(N) y espacio O(1).

**Ejemplos:**

- Entrada: `[2, 1, 2]` → Salida: `1` (se atrapa 1 unidad en el índice del medio)
- Entrada: `[3, 0, 1, 3, 0, 5]` → Salida: `8` (3 unidades en el índice 1, 2 en el índice 2, y 3 en el índice 4; el último 0 no atrapa agua porque corre hacia la izquierda)

**Bonus:** ¿Puedes resolverlo sin usar arreglos auxiliares?"""


def trap_water_between_walls(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = trap_water_between_walls
