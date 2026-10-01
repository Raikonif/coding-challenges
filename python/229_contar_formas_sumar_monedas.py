"""Contar formas de sumar con monedas (hard).

Source exercise: https://coding-challenges.dev/problems/python-contar-formas-sumar-monedas

## Contar formas de sumar con monedas

Dado un array de denominaciones de monedas `coins` y un entero `target`, cuenta el número de **combinaciones distintas** de monedas (con repetición permitida) que suman exactamente `target`.

El orden **no importa**: `[1, 2]` y `[2, 1]` cuentan como una sola combinación.

## Ejemplos

```ts
countCombinations([1, 2, 3], 4)  // 4
// Las combinaciones son: [1,1,1,1], [1,1,2], [1,3], [2,2]

countCombinations([2], 3)         // 0  (imposible llegar a 3 con solo 2s)

countCombinations([1, 2, 3], 0)   // 1  (la combinación vacía)

countCombinations([1, 2, 3], 5)   // 5
```

## Restricciones

- `1 <= coins.length <= 50`
- `1 <= coins[i] <= 100`
- `0 <= target <= 500`"""


def count_combinations(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = count_combinations
