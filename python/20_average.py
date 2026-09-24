"""Calcular el promedio de una lista — Fácil · Números

Devuelve la media aritmética de la lista. Si está vacía, devuelve 0.0.

Fuente: https://coding-challenges.dev/problems/python-calcular-promedio
"""


def average(numbers: list[float]) -> float:
    return sum(numbers) / len(numbers) if numbers else 0.0
