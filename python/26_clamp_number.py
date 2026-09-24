"""Clamp de número — Fácil · Números

Limita num al rango inclusivo [min_val, max_val].

Fuente: https://coding-challenges.dev/problems/python-clamp-de-numero
"""


def clamp_number(num: int, min_val: int, max_val: int) -> int:
    return max(min_val, min(num, max_val))
