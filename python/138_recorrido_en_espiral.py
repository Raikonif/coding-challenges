"""Recorrido en Espiral de Matriz (master).

Source exercise: https://coding-challenges.dev/problems/python-recorrido-en-espiral

## Recorrido en Espiral de Matriz

Dada una matriz 2D de enteros, escribe una función `recorridoEnEspiral` que devuelva todos sus elementos en orden espiral (de afuera hacia adentro, comenzando desde la esquina superior izquierda en sentido horario).

El recorrido sigue este patrón:
1. Fila superior (izquierda a derecha)
2. Columna derecha (arriba a abajo)
3. Fila inferior (derecha a izquierda)
4. Columna izquierda (abajo a arriba)
5. Repetir para el siguiente anillo interior

## Ejemplos

```typescript
recorridoEnEspiral([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
// [1, 2, 3, 6, 9, 8, 7, 4, 5]

recorridoEnEspiral([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
])
// [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

recorridoEnEspiral([[1]])
// [1]
```

## Restricciones

- La matriz tiene al menos 1 fila y 1 columna.
- Todas las filas tienen la misma longitud.
- Los valores son enteros (pueden ser negativos).
- No uses librerías externas."""


def recorrido_en_espiral(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = recorrido_en_espiral
