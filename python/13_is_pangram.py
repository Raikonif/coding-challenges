"""¿Es un pangrama? — Fácil · Strings

Devuelve True si la frase contiene todas las letras del alfabeto inglés,
ignorando mayúsculas y minúsculas. Los números, espacios y signos no cuentan
como letras.

Fuente: https://coding-challenges.dev/problems/python-es-pangrama
"""


def is_pangram(sentence: str) -> bool:
    alphabet = set("abcdefghijklmnopqrstuvwxyz")
    return alphabet.issubset(sentence.lower())
