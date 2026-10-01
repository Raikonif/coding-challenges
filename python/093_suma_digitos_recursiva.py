"""Suma de dígitos recursiva (hard).

Source exercise: https://coding-challenges.dev/problems/python-suma-digitos-recursiva

## Suma de dígitos recursiva

Dado un número entero no negativo, suma sus dígitos repetidamente hasta obtener un número de un solo dígito. Debes implementar la solución usando **recursión**.

Este proceso se conoce como **raíz digital** de un número.

### Ejemplos

```typescript
sumaDigitos(38);    // 2  (3+8=11, 1+1=2)
sumaDigitos(0);     // 0
sumaDigitos(9);     // 9
sumaDigitos(123);   // 6  (1+2+3=6)
sumaDigitos(9999);  // 9  (9+9+9+9=36, 3+6=9)
sumaDigitos(942);   // 6  (9+4+2=15, 1+5=6)
```

### Restricciones

- El argumento siempre será un número entero no negativo (`n >= 0`).
- **Debes usar recursión.** No se permite el uso de bucles (`for`, `while`, `do...while`).
- El resultado siempre será un número entre 0 y 9."""


def sum_digits(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = sum_digits
