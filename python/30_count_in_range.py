"""Contar elementos en rango — Fácil · Arrays

Cuenta los elementos dentro del rango inclusivo [min, max].

Fuente: https://coding-challenges.dev/problems/python-contar-elementos-en-rango
"""


def contar_en_rango(numbers: list[int], min: int, max: int) -> int:
    return sum(min <= number <= max for number in numbers)
