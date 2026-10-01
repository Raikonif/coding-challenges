"""Árbol binario de búsqueda (master).

Source exercise: https://coding-challenges.dev/problems/python-arbol-binario-de-busqueda

## Árbol binario de búsqueda

Implementa un árbol binario de búsqueda (BST) con dos operaciones: `insert` y `search`.

Recibirás un array de operaciones. Cada operación es un array `[tipo, valor]` donde:

- `["insert", n]` — inserta el número `n` en el BST. No produce salida.
- `["search", n]` — busca el número `n` en el BST. Devuelve `true` si existe, `false` si no.

La función debe devolver un array con los resultados de todas las operaciones `search`, **en el orden en que aparecen**.

## Ejemplo

```ts
binarySearchTree([
  ["insert", 5],
  ["insert", 3],
  ["insert", 7],
  ["insert", 1],
  ["search", 3],   // true
  ["search", 4],   // false
  ["insert", 4],
  ["search", 4],   // true
  ["search", 10],  // false
])
// [true, false, true, false]
```

## Reglas del BST

- Los valores menores que el nodo van al subárbol izquierdo.
- Los valores mayores o iguales van al subárbol derecho.
- No se permiten librerías externas.

## Notas

- El BST comienza vacío antes de procesar las operaciones.
- Solo las operaciones `search` producen salida.
- Los valores son siempre números enteros.
"""


def binary_search_tree(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = binary_search_tree
