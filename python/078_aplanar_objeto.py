"""Aplanar objeto (master).

Source exercise: https://coding-challenges.dev/problems/python-aplanar-objeto

Dado un objeto con posibles propiedades anidadas, devuelve un nuevo objeto **plano** donde las claves anidadas se unen con puntos (`.`).

### Ejemplo

```
flattenObject({ a: 1, b: { c: 2, d: 3 } })  → { "a": 1, "b.c": 2, "b.d": 3 }
flattenObject({ x: { y: { z: 1 } } })        → { "x.y.z": 1 }
flattenObject({ a: 1, b: 2 })                → { "a": 1, "b": 2 }
```"""


def flatten_object(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = flatten_object
