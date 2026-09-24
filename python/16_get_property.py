"""Acceder a propiedad — Fácil · Objetos

Dado un diccionario y el nombre de una clave, devuelve su valor asociado.

Fuente: https://coding-challenges.dev/problems/python-acceder-a-propiedad
"""


def get_property(obj: dict, key: str):
    return obj.get(key)
