"""Convertir a base N (master).

Source exercise: https://coding-challenges.dev/problems/python-convertir-a-base-n

## Convertir a base N

Dado un número entero no negativo y una base destino (entre 2 y 36), devuelve su representación como string en dicha base.

Para bases mayores a 10, usa letras minúsculas: `a` = 10, `b` = 11, ..., `z` = 35.

### Parámetros

- `num` (number): El número entero no negativo a convertir.
- `base` (number): La base destino (entero entre 2 y 36).

### Valor de retorno

- (string): La representación del número en la base indicada.

### Ejemplos

```typescript
convertirABase(10, 2)   // → "1010"
convertirABase(255, 16) // → "ff"
convertirABase(0, 8)    // → "0"
convertirABase(31, 16)  // → "1f"
convertirABase(100, 10) // → "100"
convertirABase(35, 36)  // → "z"
```

### Notas

- No uses `Number.prototype.toString(base)`. Implementa la conversión manualmente usando divisiones sucesivas.
- Si `num` es 0, devuelve `"0"` independientemente de la base.
- Este ejercicio requiere entender cómo funcionan los sistemas numéricos posicionales."""


def convert_to_base(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = convert_to_base
