"""Contar dígitos — Fácil · Números

Devuelve cuántos dígitos tiene un entero; el signo negativo no cuenta y 0
tiene un dígito.

Fuente: https://coding-challenges.dev/problems/python-contar-digitos
"""


def count_digits(n: int) -> int:
    return len(str(abs(n)))
