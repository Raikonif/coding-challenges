"""Contar consonantes — Fácil · Strings

Cuenta las consonantes a-z/A-Z e ignora números, espacios y puntuación.

Fuente: https://coding-challenges.dev/problems/python-contar-consonantes
"""


def count_consonants(text: str) -> int:
    vowels = set("aeiouAEIOU")
    return sum(char.isascii() and char.isalpha() and char not in vowels for char in text)
