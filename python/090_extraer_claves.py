"""Extraer claves (easy).

Source exercise: https://coding-challenges.dev/problems/python-extraer-claves

## Extraer claves

Dado un objeto, devuelve un array con todas sus claves (propiedades) en el orden en que aparecen en el objeto.

### Ejemplos

```typescript
extractKeys({ nombre: "Ana", edad: 25 });       // ["nombre", "edad"]
extractKeys({ x: 1, y: 2, z: 3 });              // ["x", "y", "z"]
extractKeys({});                                  // []
extractKeys({ a: true });                         // ["a"]
```

### Restricciones

- El argumento siempre será un objeto (nunca `null` ni `undefined`).
- El objeto puede estar vacío."""


def extract_keys(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = extract_keys
