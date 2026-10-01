"""Arbitraje de divisas (hard).

Source exercise: https://coding-challenges.dev/problems/python-currency-arbitrage

> Adaptado de [Daily Coding Problem](https://www.dailycodingproblem.com).

Este ejercicio fue preguntado por **Jane Street**.

Dada una tabla de tasas de cambio entre divisas, representada como un array 2D donde `rates[i][j]` es la tasa de cambio de la divisa `i` a la divisa `j`, determina si existe una oportunidad de **arbitraje**.

El arbitraje ocurre cuando existe una secuencia de intercambios que, comenzando con una cantidad `A` de cualquier divisa, permite terminar con una cantidad **mayor que `A`** de esa misma divisa.

No hay costos de transacción y se pueden intercambiar cantidades fraccionarias.

**Ejemplo:**

```
rates = [
  [1,    2,   0.5],
  [0.5,  1,   4  ],
  [2,    0.25, 1 ]
]
```

En este caso, convirtiendo divisa 0 → divisa 1 → divisa 2 → divisa 0: `1 * 2 * 4 * 2 = 16 > 1`, por lo que existe arbitraje y la función debe devolver `true`.

**Bonus:** ¿Puedes resolverlo usando el algoritmo de Bellman-Ford sobre los logaritmos negativos de las tasas?"""


def currency_arbitrage(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = currency_arbitrage
