"""
¿Es entero?
Fácil
10 pts
Números

Enunciado
Dado un número, devuelve true si es un número entero (sin parte decimal).

Ejemplo
is_integer(5)    # True
is_integer(3.14) # False
is_integer(0)    # True
is_integer(-7)   # True
Puedes usar print() para depurar. Los resultados aparecen en la Consola de salida, no en el navegador.
"""


def is_integer(value: float) -> bool:
    return isinstance(value, int)
