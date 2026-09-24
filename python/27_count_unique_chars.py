"""Contar caracteres únicos — Fácil · Strings

Devuelve la cantidad de caracteres distintos, distinguiendo mayúsculas y
minúsculas. Los espacios también cuentan.

Fuente: https://coding-challenges.dev/problems/python-typescript-contar-caracteres-unicos
"""


def count_unique_chars(text: str) -> int:
    return len(set(text))
