"""
¿Contiene el carácter?
Fácil
10 pts
Strings

Enunciado
Devuelve true si el string contiene el carácter dado, false si no.

Ejemplo
contains_char("hola", "o")  # True
contains_char("hola", "z")  # False
Puedes usar print() para depurar. Los resultados aparecen en la Consola de salida, no en el navegador.
"""


def contains_char(text: str, char: str) -> bool:
    return char in text
