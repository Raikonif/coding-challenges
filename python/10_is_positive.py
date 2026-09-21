"""¿Es positivo? — Fácil · Python básico

Devuelve True si el número es mayor que 0 y False en caso contrario.

Fuente: https://coding-challenges.dev/problems/python-es-positivo
"""


def is_positive(value: int) -> bool:
    return value > 0


print(is_positive(5))
print(is_positive(2))
print(is_positive(-3))
print(is_positive(4))
print(is_positive(0))