"""Sumar por categoría (medium).

Source exercise: https://coding-challenges.dev/problems/python-sumar-por-categoria


## Sumar por categoría

Dada una lista de objetos con las propiedades `category` (string) y `value` (number), retorna un **nuevo objeto** donde cada clave es una categoría y su valor es la suma total de todos los `value` que pertenecen a esa categoría.

## Ejemplos

```ts
sumByCategory([
  { category: "frutas", value: 3 },
  { category: "verduras", value: 5 },
  { category: "frutas", value: 7 },
])
// { frutas: 10, verduras: 5 }

sumByCategory([])
// {}

sumByCategory([{ category: "a", value: 1 }])
// { a: 1 }
```

## Restricciones

- Los valores pueden ser negativos.
- El orden de las claves en el resultado no importa.
- Si la lista está vacía, retorna `{}`.
"""


def sum_by_category(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = sum_by_category
