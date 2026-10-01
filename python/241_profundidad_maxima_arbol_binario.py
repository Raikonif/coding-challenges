"""Profundidad máxima de árbol binario (medium).

Source exercise: https://coding-challenges.dev/problems/python-profundidad-maxima-arbol-binario


## Profundidad máxima de árbol binario

Dado un árbol binario representado como nodos enlazados, implementa una función que calcule su **profundidad máxima** (la cantidad de nodos a lo largo del camino más largo desde la raíz hasta una hoja).

El árbol se representa con objetos que tienen la siguiente estructura:

```typescript
interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
```

### Ejemplo

```
    1
   / \
  2   3
 / \
4   5
```

La profundidad máxima es `3` (camino: 1 → 2 → 4 o 1 → 2 → 5).

### Casos especiales

- Si el árbol está vacío (`null`), la profundidad es `0`.
- Un árbol con solo la raíz tiene profundidad `1`.
"""


def profundidad_maxima_arbol_binario(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = profundidad_maxima_arbol_binario
