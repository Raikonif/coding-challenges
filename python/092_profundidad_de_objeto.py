"""Profundidad de objeto (hard).

Source exercise: https://coding-challenges.dev/problems/python-profundidad-de-objeto

## Profundidad de objeto

Dado un objeto que puede contener otros objetos anidados, devuelve la **profundidad máxima** de anidamiento.

Un objeto vacío `{}` o un objeto sin propiedades que sean objetos tiene profundidad `1`. Cada nivel de anidamiento suma 1 a la profundidad.

### Ejemplos

```typescript
profundidadObjeto({});                          // 1
profundidadObjeto({ a: 1, b: 2 });              // 1
profundidadObjeto({ a: { b: 1 } });             // 2
profundidadObjeto({ a: { b: { c: 1 } } });      // 3
profundidadObjeto({ a: { b: 1 }, c: { d: { e: 2 } } }); // 3
```

### Restricciones

- El argumento siempre sera un objeto (nunca `null`, `undefined` ni un array).
- Los valores que **no** son objetos planos (numeros, strings, booleanos, arrays, `null`) no cuentan como un nivel adicional.
- Solo los objetos planos (`{}`) generan profundidad adicional."""


def object_depth(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = object_depth
