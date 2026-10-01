"""Subsecuencia creciente más larga (hard).

Source exercise: https://coding-challenges.dev/problems/null

## Subsecuencia creciente más larga

Dado un array de números enteros, encuentra la **longitud** de la subsecuencia estrictamente creciente más larga (LIS - Longest Increasing Subsequence).

Una subsecuencia es un conjunto de elementos del array en el mismo orden relativo, pero no necesariamente consecutivos.

## Ejemplos

```typescript
longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])
// 4  → [2, 3, 7, 101]

longestIncreasingSubsequence([0, 1, 0, 3, 2, 3])
// 4  → [0, 1, 2, 3]

longestIncreasingSubsequence([7, 7, 7, 7])
// 1  (no hay elementos estrictamente crecientes)
```

## Restricciones

- El array puede tener entre 0 y 2500 elementos.
- Si el array está vacío, retorna `0`.
- Los valores pueden ser negativos.
- La solución debe tener complejidad O(n²) o mejor.
"""


def longest_increasing_subsequence(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = longest_increasing_subsequence
