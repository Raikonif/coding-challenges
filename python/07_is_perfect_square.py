"""¿Es cuadrado perfecto? — Fácil · Números

Dado un entero no negativo, devuelve True si es un cuadrado perfecto.
No uses math.sqrt() ni otra función de raíz cuadrada.

Ejemplos: is_perfect_square(0) -> True, is_perfect_square(4) -> True,
is_perfect_square(14) -> False.

Fuente: https://coding-challenges.dev/problems/python-es-cuadrado-perfecto
"""


def is_perfect_square(n: int) -> bool:
    if n >= 0:
        for i in range(n + 1):
            if i ** 2 == n:
                return True
            if i ** 2 > n:
                break
    return False


print(is_perfect_square(9))
print(is_perfect_square(5))
print(is_perfect_square(10))
