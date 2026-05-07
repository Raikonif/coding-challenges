"""
¿Al menos uno es verdadero?
Fácil
10 pts
Booleanos

Enunciado
Dados dos booleanos, devuelve True si al menos uno de los dos es True (compuerta OR).

Ejemplo
at_least_one_true(True, False)  → True
at_least_one_true(False, False) → False
at_least_one_true(True, True)   → True
Puedes usar print() para depurar. Los resultados aparecen en la Consola de salida, no en el navegador.
"""


def at_least_one_true(first_value: bool, second_value: bool) -> bool:
    # inclusive OR
    return first_value or second_value


print(at_least_one_true(True, False))  # True
print(at_least_one_true(False, False))  # False
print(at_least_one_true(True, True))  # True
