"""Par con suma más cercana (hard).

Source exercise: https://coding-challenges.dev/problems/python-par-suma-mas-cercana

Dado un array de números enteros **ordenado de menor a mayor** y un número objetivo `target`, encuentra el **par de números** (en posiciones distintas) cuya suma sea la más cercana al objetivo.

Devuelve ese par como un array `[a, b]` donde `a <= b`.

Si hay varios pares con la misma diferencia al objetivo, devuelve el par cuya **suma sea menor**. Si además la suma es igual, devuelve el par con la **menor diferencia entre sus elementos** (`b - a`).

## Ejemplos

```typescript
closestPairSum([1, 3, 4, 7, 10], 15)   // [4, 10]  (suma 14, diferencia 1)
closestPairSum([1, 2, 3, 4, 5], 10)    // [4, 5]   (suma 9, diferencia 1)
closestPairSum([-3, 3, 4, 6], 5)        // [-3, 6]  (suma 3, diferencia 2; empate con [3,4] pero suma menor)
closestPairSum([1, 3, 5, 7], 6)        // [1, 5]   (suma 6, diferencia 0)
```

## Notas

- El array siempre tendrá al menos 2 elementos.
- Existe una solución eficiente O(n).
- El resultado siempre debe ser `[menor, mayor]`."""


def par_suma_mas_cercana(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = par_suma_mas_cercana
