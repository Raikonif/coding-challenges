"""¿Es par? — Fácil · Python básico

Devuelve True si el número es par y False si es impar.

Fuente: https://coding-challenges.dev/problems/python-es-par
"""


def is_even(value: int) -> bool:
    return value %2 == 0


print(is_even(5))
print(is_even(3))
print(is_even(4))
