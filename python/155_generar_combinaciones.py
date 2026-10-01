"""Generar combinaciones (hard).

Source exercise: https://coding-challenges.dev/problems/python-generar-combinaciones

## Generar combinaciones

Dada una lista de números y un entero `k`, genera todas las combinaciones posibles de `k` elementos tomados del array.

El orden dentro de cada combinación no importa, y no debe haber combinaciones repetidas. Las combinaciones deben generarse en el orden natural del array (sin reordenar los elementos originales).

## Ejemplos

```ts
combinations([1, 2, 3], 2)
// [[1,2], [1,3], [2,3]]

combinations([1, 2, 3, 4], 3)
// [[1,2,3], [1,2,4], [1,3,4], [2,3,4]]

combinations([5, 10], 1)
// [[5], [10]]

combinations([1, 2, 3], 3)
// [[1,2,3]]
```

## Notas

- Si `k` es mayor que la longitud del array, retorna un array vacío `[]`.
- Si `k` es 0, retorna `[[]]` (una combinación vacía).
- El array de entrada tendrá entre 1 y 10 elementos.
- Los elementos del array son números enteros únicos.
- Las combinaciones deben aparecer en el orden en que los elementos aparecen en el array original."""


def generar_combinaciones(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = generar_combinaciones
