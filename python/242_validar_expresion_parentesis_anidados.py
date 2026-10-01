"""Validar expresión de paréntesis anidados (hard).

Source exercise: https://coding-challenges.dev/problems/python-validar-expresion-parentesis-anidados


## Validar expresión de paréntesis anidados

Implementa una función que, dado un string con paréntesis, corchetes y llaves, determine si la expresión está **correctamente balanceada**.

Una expresión está balanceada si:
- Cada apertura tiene su cierre correspondiente del mismo tipo.
- Los pares están correctamente anidados (no se cruzan).
- No hay cierres sin apertura previa.

### Tipos de brackets válidos

| Apertura | Cierre |
|----------|--------|
| `(`      | `)`    |
| `[`      | `]`    |
| `{`      | `}`    |

### Ejemplo

```typescript
validarParentesis("({[]})") // true
validarParentesis("([)]")   // false — se cruzan
validarParentesis("{[}")     // false — falta cierre de [
validarParentesis("")        // true — vacío es válido
```

### Notas

- El string puede contener otros caracteres además de brackets; ignóralos.
- Un string vacío se considera válido.
"""


def validar_parentesis(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = validar_parentesis
