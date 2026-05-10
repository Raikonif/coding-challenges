"""
¿Ambos verdaderos?
Fácil
10 pts
Booleanos

Enunciado
Dados dos booleanos, devuelve true solo si ambos son true (compuerta AND).

Ejemplo
both_true(True, True)   # True
both_true(True, False)  # False
both_true(False, False) # False
Puedes usar print() para depurar. Los resultados aparecen en la Consola de salida, no en el navegador.
"""


def both_true(first_value: bool, second_value: bool) -> bool:
    return first_value and second_value
