"""Saltar juego (hard).

Source exercise: https://coding-challenges.dev/problems/python-saltar-juego

## Saltar juego

Dado un array de enteros no negativos `jumps`, donde cada elemento representa el número máximo de posiciones que puedes avanzar desde esa posición, determina si es posible llegar al **último índice** partiendo desde el índice 0.

## Ejemplos

```
entrada: [2, 3, 1, 1, 4]
salida: true
// Puedes saltar 1 posición desde el índice 0 al 1, luego 3 posiciones hasta el final.
```

```
entrada: [3, 2, 1, 0, 4]
salida: false
// Siempre terminas en el índice 3 (que vale 0), nunca puedes llegar al final.
```

```
entrada: [0]
salida: true
// Ya estás en el último índice.
```

## Restricciones

- `1 <= jumps.length <= 10_000`
- `0 <= jumps[i] <= 10_000`

## Pista

Mantén un registro del índice máximo alcanzable mientras recorres el array. Si en algún punto tu posición supera ese máximo, ya no puedes avanzar."""


def saltar_juego(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = saltar_juego
