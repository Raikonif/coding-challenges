"""Números de Catalan (master).

Source exercise: https://coding-challenges.dev/problems/python-numeros-de-catalan

Los **números de Catalan** son una secuencia de números naturales que aparecen en muchos problemas combinatorios:

```
C(0) = 1
C(1) = 1
C(2) = 2
C(3) = 5
C(4) = 14
C(5) = 42
```

La fórmula recursiva es:

```
C(n) = sum of C(i) * C(n-1-i) for i = 0 to n-1
```

Implementa la función usando **programación dinámica** (bottom-up) para calcular `C(n)` de forma eficiente.

## Ejemplos

```typescript
catalanNumber(0)   // 1
catalanNumber(1)   // 1
catalanNumber(3)   // 5
catalanNumber(5)   // 42
catalanNumber(10)  // 16796
```

## Notas

- `n` siempre será un entero no negativo.
- La solución debe ser eficiente: usa memoización o programación dinámica (no recursión pura que recalcule).
- Para n=10, C(10) = 16796."""


def numeros_de_catalan(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = numeros_de_catalan
