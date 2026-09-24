"""Celsius a Fahrenheit — Fácil · Números

Convierte con F = (C × 9/5) + 32 y redondea el resultado a dos decimales.

Fuente: https://coding-challenges.dev/problems/python-celsius-a-fahrenheit
"""


def celsius_to_fahrenheit(celsius: float) -> float:
    return round(celsius * 9 / 5 + 32, 2)
