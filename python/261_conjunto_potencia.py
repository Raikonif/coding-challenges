"""Conjunto Potencia (hard).

Source exercise: https://coding-challenges.dev/problems/null

> Adaptado de [Daily Coding Problem](https://www.dailycodingproblem.com).

Este ejercicio fue preguntado por **Google**.

El conjunto potencia de un conjunto es el conjunto de todos sus subconjuntos. Escribe una función que, dado un conjunto de enteros únicos, genere su conjunto potencia.

Por ejemplo, dado el conjunto `[1, 2, 3]`, debe retornar `[[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]`.

Puedes usar una lista o arreglo para representar un conjunto. El resultado debe estar ordenado lexicográficamente: primero el subconjunto vacío, luego los subconjuntos ordenados por su primer elemento (y en caso de empate, por el siguiente). Cada subconjunto debe estar ordenado internamente.

**Ejemplo:**

```typescript
powerSet([1, 2, 3])
// [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

powerSet([0])
// [[], [0]]
```"""


def power_set(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = power_set
