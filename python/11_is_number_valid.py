"""¿Es un número válido? — Fácil · Strings

Determina si un string representa un entero o decimal válido. Puede tener
un signo negativo inicial y un punto decimal, pero no letras ni espacios.

Ejemplos: es_numero_valido("42") -> True, es_numero_valido("-3.14") -> True,
es_numero_valido("abc") -> False, es_numero_valido("") -> False.

Fuente: https://coding-challenges.dev/problems/python-es-numero-valido
"""


def es_numero_valido(value: str) -> bool:
    try:
        float(value)
        return True
    except ValueError:
        return False


print(es_numero_valido("42"))
print(es_numero_valido("-3.14"))
print(es_numero_valido("abc"))
print(es_numero_valido(""))