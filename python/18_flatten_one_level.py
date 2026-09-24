"""Aplanar un nivel — Fácil · Arrays

Retorna una nueva lista eliminando únicamente las sub-listas de primer nivel.
No hagas un aplanamiento recursivo ni uses itertools.chain.

Fuente: https://coding-challenges.dev/problems/python-aplanar-un-nivel
"""


def flatten_one_level(array: list) -> list:
    flattened = []
    for item in array:
        flattened.extend(item if isinstance(item, list) else [item])
    return flattened
