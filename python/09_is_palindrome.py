"""¿Es palíndromo? — Fácil · Strings

Ignorando mayúsculas y minúsculas, determina si el string se lee igual
de izquierda a derecha que de derecha a izquierda.

Fuente: https://coding-challenges.dev/problems/typescript-es-palindromo
"""


def is_palindrome(text: str) -> bool:
    normalized = text.lower()
    return normalized == normalized[::-1]
