"""Caracteres en común — Fácil · Strings

Devuelve cuántos caracteres distintos aparecen en ambas cadenas, ignorando
mayúsculas y minúsculas.

Fuente: https://coding-challenges.dev/problems/python-caracteres-en-comun
"""


def common_chars(a: str, b: str) -> int:
    return len(set(a.lower()) & set(b.lower()))
