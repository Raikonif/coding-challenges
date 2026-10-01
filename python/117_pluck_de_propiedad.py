"""Pluck de propiedad (medium).

Source exercise: https://coding-challenges.dev/problems/python-pluck-de-propiedad

## Pluck de propiedad

Dado un array de objetos y el nombre de una clave, devuelve un array con los valores de esa clave extraídos de cada objeto.

Esta operación se conoce como "pluck" y es muy común en manipulación de datos.

## Ejemplos

```
pluck([{ name: "Ana", age: 25 }, { name: "Luis", age: 30 }], "name")
// ["Ana", "Luis"]

pluck([{ name: "Ana", age: 25 }, { name: "Luis", age: 30 }], "age")
// [25, 30]

pluck([], "name")
// []

pluck([{ x: 1 }, { x: 2 }, { x: 3 }], "x")
// [1, 2, 3]
```

## Notas

- El array puede estar vacío, en cuyo caso devuelve `[]`.
- Puedes asumir que todos los objetos tienen la clave indicada."""


def pluck(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = pluck
