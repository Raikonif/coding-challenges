"""Verificación de brackets balanceados (hard).

Source exercise: https://coding-challenges.dev/problems/python-balanced-brackets-check

> Adaptado de [Daily Coding Problem](https://www.dailycodingproblem.com).

Este ejercicio fue preguntado por **Facebook**.

Dada una cadena de texto que contiene brackets de apertura y cierre de tres tipos: redondos `()`, curvos `{}` y cuadrados `[]`, devuelve `true` si los brackets están correctamente balanceados (bien formados), o `false` en caso contrario.

**Ejemplos:**

- `"([])[]({})"` → `true`
- `"([)]"` → `false`
- `"((()"` → `false`

Un string de brackets está balanceado si:
- Cada bracket de apertura tiene su correspondiente bracket de cierre del mismo tipo.
- Los brackets se cierran en el orden correcto (el último abierto es el primero en cerrarse)."""


def balanced_brackets_check(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = balanced_brackets_check
