"""¿Es múltiplo? — Fácil · Números

Devuelve True si n es múltiplo de m. Si m es 0, devuelve False.

Ejemplos: is_multiple(10, 2) -> True, is_multiple(7, 2) -> False.

Fuente: https://coding-challenges.dev/problems/python-es-multiplo
"""


def is_multiple(n: int, m: int) -> bool:
    return m != 0 and n % m == 0


print(is_multiple(10, 2))
print(is_multiple(7, 2))
