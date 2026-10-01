"""Agua atrapada entre muros (hard).

Source exercise: https://coding-challenges.dev/problems/python-agua-atrapada-entre-muros

## Agua atrapada entre muros

Imagina una serie de muros verticales vistos de perfil. Cuando llueve, el agua queda atrapada en los "valles" que se forman entre muros más altos. Tu tarea es calcular cuántas unidades de agua se acumulan en total.

**Regla clave:** en cada posición, el agua que se puede acumular depende de los muros más altos a su izquierda y a su derecha. La cantidad de agua sobre esa posición es:

```
agua[i] = max(0, min(maxIzquierda, maxDerecha) - altura[i])
```

## Ejemplo paso a paso

Dado `[3, 0, 2, 0, 4]`:

```
         |
|        |
|   |    |
| ~ | ~  |      ← ~ representa agua atrapada
---------
 3  0  2  0  4
```

- Posición 1 (altura 0): rodeada por muros de 3 (izq) y 4 (der) → acumula `min(3,4) - 0 = 3`
- Posición 2 (altura 2): rodeada por muros de 3 (izq) y 4 (der) → acumula `min(3,4) - 2 = 1`
- Posición 3 (altura 0): rodeada por muros de 3 (izq) y 4 (der) → acumula `min(3,4) - 0 = 3`

Total: `3 + 1 + 3 = 7` unidades.

## Ejemplos

```ts
trappedWater([3, 0, 2, 0, 4])
// 7

trappedWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
// 6

trappedWater([4, 2, 0, 3, 2, 5])
// 9

trappedWater([])
// 0
```

## Notas

- Si el array está vacío o tiene un solo elemento, devuelve `0`.
- Las alturas son siempre enteros no negativos.
- La solución naive O(n²) funciona. Para mayor eficiencia, prueba con dos punteros: O(n) tiempo y O(1) espacio.
"""


def trapped_water(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = trapped_water
