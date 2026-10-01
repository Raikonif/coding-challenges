"""Árbol desde array plano (master).

Source exercise: https://coding-challenges.dev/problems/python-arbol-desde-array-plano

## Árbol desde array plano

Dado un array de nodos con estructura plana, construye un árbol jerárquico donde cada nodo tenga un campo `children` con sus hijos directos.

## Estructura de cada nodo de entrada

```typescript
{
  id: number;
  parentId: number | null;
  name: string;
}
```

El nodo raíz tiene `parentId: null`. El resto de los nodos apuntan a su padre mediante `parentId`.

## Estructura de cada nodo de salida

```typescript
{
  id: number;
  parentId: number | null;
  name: string;
  children: TreeNode[];  // hijos ordenados por id ascendente
}
```

## Ejemplo

Entrada:
```
[
  { id: 1, parentId: null, name: "raiz" },
  { id: 2, parentId: 1,    name: "hijo1" },
  { id: 3, parentId: 1,    name: "hijo2" }
]
```

Salida:
```
[
  {
    id: 1, parentId: null, name: "raiz",
    children: [
      { id: 2, parentId: 1, name: "hijo1", children: [] },
      { id: 3, parentId: 1, name: "hijo2", children: [] }
    ]
  }
]
```

## Notas

- Devuelve un array con los nodos raíz (aquellos con `parentId: null`).
- Los `children` de cada nodo deben estar ordenados por `id` ascendente.
- Si el array de entrada está vacío, devuelve `[]`.
- Puedes asumir que no hay ciclos en la estructura de datos."""


def arbol_desde_array_plano(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = arbol_desde_array_plano
