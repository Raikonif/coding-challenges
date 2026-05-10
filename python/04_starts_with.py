"""
¿Empieza con el prefijo?
Fácil
10 pts
Strings

Enunciado
Descripción
Dado un string text y un string prefix, devuelve true si text comienza exactamente con prefix, o false en caso contrario.

La comparación es sensible a mayúsculas y minúsculas.

Ejemplos
starts_with("hola mundo", "hola")   # True
starts_with("hola mundo", "Hola")   # False
starts_with("TypeScript", "Type")   # True
starts_with("TypeScript", "script") # False
starts_with("", "")                 # True
starts_with("abc", "")              # True
Notas
Si prefix es un string vacío, siempre devuelve True.
Si text es más corto que prefix, devuelve False.
No uses el método nativo str.startswith.
Puedes usar print() para depurar. Los resultados aparecen en la Consola de salida, no en el navegador.
"""


def starts_with(text: str, prefix: str) -> bool:
    return text.startswith(prefix)
