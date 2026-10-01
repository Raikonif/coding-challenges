"""Subcadena más larga sin repetir (hard).

Source exercise: https://coding-challenges.dev/problems/python-subcadena-mas-larga-sin-repetir

## Subcadena más larga sin repetir

Dado un string, encuentra la longitud de la **subcadena más larga** que no contenga caracteres repetidos.

Una subcadena es una secuencia **contigua** de caracteres dentro del string.

### Parámetros

- `s` (string): El string de entrada.

### Valor de retorno

- (number): La longitud de la subcadena más larga sin caracteres repetidos.

### Ejemplos

```typescript
longitudSubcadena("abcabcbb") // → 3 (la subcadena es "abc")
longitudSubcadena("bbbbb")    // → 1 (la subcadena es "b")
longitudSubcadena("pwwkew")   // → 3 (la subcadena es "wke")
longitudSubcadena("")          // → 0
longitudSubcadena("abcdef")   // → 6 (todo el string es único)
```

### Notas

- El string puede contener letras, números, espacios y símbolos.
- Si el string está vacío, devuelve 0.
- Esta es una variante del clásico problema "Longest Substring Without Repeating Characters". Se recomienda usar la técnica de **ventana deslizante** (sliding window)."""


def longest_substring(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = longest_substring
