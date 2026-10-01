"""Distancia de edición (master).

Source exercise: https://coding-challenges.dev/problems/python-distancia-de-edicion

## Descripción

Dadas dos cadenas de texto `source` y `target`, calcula la **distancia de edición mínima** (también conocida como distancia de Levenshtein) para transformar `source` en `target`.

Las operaciones permitidas son, cada una con costo **1**:

- **Insertar** un carácter.
- **Eliminar** un carácter.
- **Reemplazar** un carácter por otro.

## Ejemplos

```
editDistance("kitten", "sitting") // 3
// kitten → sitten (reemplazar k→s)
// sitten → sittin (reemplazar e→i)
// sittin → sitting (insertar g)

editDistance("horse", "ros") // 3
// horse → rorse (reemplazar h→r)
// rorse → rose  (eliminar r)
// rose  → ros   (eliminar e)

editDistance("abc", "abc") // 0

editDistance("", "abc") // 3

editDistance("abc", "") // 3
```

## Notas

- Usa **programación dinámica** para lograr una solución O(m*n).
- Si alguna cadena está vacía, la distancia es la longitud de la otra.
- La comparación es **case-sensitive**."""


def edit_distance(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = edit_distance
