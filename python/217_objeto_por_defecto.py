"""Objeto por defecto (easy).

Source exercise: https://coding-challenges.dev/problems/python-objeto-por-defecto


## Objeto por defecto

Dado un objeto `target` y un objeto `defaults`, retorna un **nuevo objeto** que contiene todas las propiedades de `defaults`, pero sobreescrito por las propiedades que existan en `target`.

Las propiedades de `target` tienen prioridad. Si una propiedad existe en `defaults` pero no en `target`, se usa el valor de `defaults`. Si una propiedad existe en `target`, se usa ese valor aunque sea `0`, `false` o `""`.

> No modifiques ninguno de los dos objetos originales.

## Ejemplos

```ts
defaultsObject({ name: "Ana" }, { name: "Invitado", role: "user" })
// { name: "Ana", role: "user" }

defaultsObject({}, { color: "azul", size: 10 })
// { color: "azul", size: 10 }

defaultsObject({ active: false, score: 0 }, { active: true, score: 5, level: 1 })
// { active: false, score: 0, level: 1 }
```

## Restricciones

- Solo propiedades de primer nivel (no recursivo).
- Ambos objetos tienen valores primitivos.
"""


def defaults_object(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = defaults_object
