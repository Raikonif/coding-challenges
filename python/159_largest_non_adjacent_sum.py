"""Mayor suma de números no adyacentes (hard).

Source exercise: https://coding-challenges.dev/problems/python-largest-non-adjacent-sum

> Adaptado de [Daily Coding Problem](https://www.dailycodingproblem.com).

Este ejercicio fue preguntado por **Airbnb**.

Dada una lista de enteros, escribe una función que devuelva la **mayor suma posible** seleccionando números en posiciones no adyacentes. No puedes elegir dos números que estén en posiciones consecutivas del array.

Si todos los números son negativos o el array está vacío, devuelve `0` (no estás obligado a seleccionar ningún elemento).

**Ejemplos:**

```
largestNonAdjacentSum([2, 4, 6, 8])     // → 12  (elegimos 4 + 8, en posiciones 1 y 3)
largestNonAdjacentSum([5, 1, 1, 5])     // → 10  (elegimos 5 + 5, en posiciones 0 y 3)
largestNonAdjacentSum([3, 2, 5, 10, 7]) // → 15  (elegimos 3 + 5 + 7, en posiciones 0, 2 y 4)
largestNonAdjacentSum([-1, -2, -3])     // → 0   (no conviene seleccionar nada)
largestNonAdjacentSum([5])              // → 5   (un único elemento, lo seleccionamos)
```

En el tercer ejemplo, aunque 5 y 10 son adyacentes, la combinación óptima es 3+5+7 = 15, no 5+10 = 15. Siempre busca la combinación de elementos no adyacentes que maximize la suma total."""


def largest_non_adjacent_sum(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = largest_non_adjacent_sum
