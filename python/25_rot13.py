"""Cifrado ROT13 — Fácil · Strings

Aplica ROT13 a letras mayúsculas y minúsculas; los demás caracteres quedan
sin cambios.

Fuente: https://coding-challenges.dev/problems/python-cifrar-rot13
"""


def rot13(text: str) -> str:
    result = []
    for char in text:
        if "a" <= char <= "z":
            result.append(chr((ord(char) - ord("a") + 13) % 26 + ord("a")))
        elif "A" <= char <= "Z":
            result.append(chr((ord(char) - ord("A") + 13) % 26 + ord("A")))
        else:
            result.append(char)
    return "".join(result)
