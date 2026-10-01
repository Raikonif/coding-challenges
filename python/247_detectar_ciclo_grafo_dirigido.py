"""Detectar ciclo en grafo dirigido (hard).

Source exercise: https://coding-challenges.dev/problems/python-detectar-ciclo-grafo-dirigido

## Detectar ciclo en grafo dirigido

Dado un grafo dirigido representado como una **lista de adyacencia**, determina si el grafo contiene algún ciclo.

El grafo se representa como un objeto donde cada clave es un nodo (número) y su valor es un array de nodos a los que apunta.

Devuelve `true` si existe al menos un ciclo, `false` en caso contrario.

## Ejemplos

```
hasCycle({ 0: [1], 1: [2], 2: [0] })        → true   // 0→1→2→0 forma un ciclo
hasCycle({ 0: [1], 1: [2], 2: [] })          → false  // sin ciclo
hasCycle({ 0: [1, 2], 1: [3], 2: [3], 3: [] }) → false
hasCycle({ 0: [1], 1: [2], 2: [1] })         → true   // 1→2→1
```

## Notas

- El grafo puede tener nodos desconectados.
- Puedes usar DFS con seguimiento de nodos en el stack de llamadas actual.
- Los nodos son números enteros no negativos.
"""


def detectar_ciclo_grafo_dirigido(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = detectar_ciclo_grafo_dirigido
