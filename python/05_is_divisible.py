"""
¿Es divisible?
Fácil
10 pts
Números

Enunciado
Dados dos números n y divisor, devuelve true si n es divisible por divisor (sin residuo).

Ejemplo
is_divisible(10, 2)  # True
is_divisible(7, 2)   # False
is_divisible(9, 3)   # True
Puedes usar print() para depurar. Los resultados aparecen en la Consola de salida, no en el navegador.
"""


def is_divisible(value: int, divisor: int) -> bool:
    return value % divisor == 0
