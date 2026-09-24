"""Contar elementos mayores que la media — Fácil · Arrays

Cuenta los elementos estrictamente mayores que la media; una lista vacía
devuelve 0.

Fuente: https://coding-challenges.dev/problems/python-contar-elementos-mayor-media
"""


def count_above_average(numbers: list[float]) -> int:
    if not numbers:
        return 0
    mean = sum(numbers) / len(numbers)
    return sum(number > mean for number in numbers)
