"""Año bisiesto — Fácil · Números

Un año es bisiesto si es divisible por 400, o por 4 pero no por 100.

Fuente: https://coding-challenges.dev/problems/python-ano-bisiesto
"""


def is_leap_year(year: int) -> bool:
    return year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)
