"""Carácter más frecuente — Fácil · Strings

Devuelve el carácter más frecuente; en empate, el primero que aparece.
Los espacios también cuentan.

Fuente: https://coding-challenges.dev/problems/python-caracter-mas-frecuente
"""


def most_frequent_char(text: str) -> str:
    if not text:
        return ""
    counts = {}
    for char in text:
        counts[char] = counts.get(char, 0) + 1
    return max(counts, key=counts.get)
