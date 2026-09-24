"""¿Termina con sufijo? — Fácil · Strings

Determina si s termina con suffix. No uses str.endswith(); un sufijo vacío
siempre coincide y uno más largo que s nunca coincide.

Fuente: https://coding-challenges.dev/problems/python-termina-con-sufijo
"""


def ends_with_suffix(s: str, suffix: str) -> bool:
    return len(suffix) <= len(s) and s[len(s) - len(suffix):] == suffix
