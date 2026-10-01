"""Expresiones regulares simplificadas (hard).

Source exercise: https://coding-challenges.dev/problems/python-simplified-regex-matching

> Adaptado de [Daily Coding Problem](https://www.dailycodingproblem.com).

Este ejercicio fue preguntado por **Facebook**.

Implementa una función que evalúe si un string coincide con una expresión regular simplificada. La expresión regular puede contener los siguientes caracteres especiales:

- `.` (punto): coincide con cualquier carácter individual.
- `*` (asterisco): coincide con cero o más repeticiones del elemento anterior.

Por ejemplo:
- La expresión `"ra."` coincide con `"ray"` → `true`, pero no con `"raymond"` → `false`.
- La expresión `".*at"` coincide con `"chat"` → `true`, pero no con `"chats"` → `false`.

Tu función debe devolver `true` si el string completo coincide con el patrón, o `false` en caso contrario."""


def simplified_regex_matching(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = simplified_regex_matching
