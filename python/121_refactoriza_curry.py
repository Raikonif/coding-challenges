"""Implementar curry (master).

Source exercise: https://coding-challenges.dev/problems/python-refactoriza-curry

## Refactoriza: usa curry()

En este ejercicio tienes una función `curry` completamente implementada y una versión de `curryAdd3` que **no la usa** — está implementada manualmente con arrow functions anidadas.

## Tu tarea

Refactoriza `curryAdd3` para que use la función `curry` en lugar de la implementación manual con arrow functions.

## Cómo funciona curry

La función `curry(fn)` transforma cualquier función de múltiples argumentos en su versión currificada. La versión currificada puede recibir los argumentos de varias formas:

```
curryAdd3(1, 2, 3)   // 6  → todos los argumentos a la vez
curryAdd3(1)(2)(3)   // 6  → un argumento a la vez
curryAdd3(1, 2)(3)   // 6  → combinación parcial
curryAdd3(1)(2, 3)   // 6  → combinación parcial
```

## Restricción

- `curryAdd3` debe crearse llamando a `curry()` — no puedes usar arrow functions anidadas manualmente."""


def curry_add3(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = curry_add3
