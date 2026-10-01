"""Validar dirección IPv4 (hard).

Source exercise: https://coding-challenges.dev/problems/python-validar-ipv4

## Validar dirección IPv4

Dado un string, determina si es una dirección IPv4 válida. Una dirección IPv4 válida tiene **exactamente cuatro octetos** separados por puntos, donde cada octeto es un número entero entre **0 y 255** (inclusive), sin ceros a la izquierda.

### Ejemplos

```ts
isValidIPv4("192.168.1.1")    // true
isValidIPv4("255.255.255.255") // true
isValidIPv4("0.0.0.0")        // true
isValidIPv4("256.1.1.1")      // false  (256 > 255)
isValidIPv4("192.168.01.1")   // false  (cero a la izquierda)
isValidIPv4("192.168.1")      // false  (solo 3 octetos)
isValidIPv4("abc.def.ghi.jkl") // false (no es numérico)
isValidIPv4("1.2.3.4.5")      // false  (5 octetos)
```

### Notas

- Un octeto con ceros a la izquierda como `"01"` o `"001"` **no es válido**.
- El string `"0"` sí es válido como octeto.
- No se permiten espacios ni caracteres extra.
- Si el string está vacío, devuelve `false`."""


def is_valid_ipv4(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = is_valid_ipv4
