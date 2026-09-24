"""Capitalizar primera letra — Fácil · Strings

Devuelve el string con la primera letra en mayúscula y el resto sin modificar.
Un string vacío devuelve otro string vacío.

Fuente: https://coding-challenges.dev/problems/python-capitalizar-primer-letra
"""


def capitalize_first_letter(text: str) -> str:
    return text[:1].upper() + text[1:]
