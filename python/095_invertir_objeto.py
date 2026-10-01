"""Invertir objeto (medium).

Source exercise: https://coding-challenges.dev/problems/python-invertir-objeto

## Invertir objeto

Dado un objeto donde las claves son strings y los valores también son strings, devuelve un nuevo objeto donde las claves y los valores estén intercambiados.

Es decir, cada clave del objeto original se convierte en el valor del nuevo objeto, y cada valor del original se convierte en la clave del nuevo objeto.

Si hay valores duplicados en el objeto original, la última clave encontrada prevalece.

### Ejemplos

```typescript
invertirObjeto({ a: "1", b: "2", c: "3" })
// { "1": "a", "2": "b", "3": "c" }

invertirObjeto({ nombre: "Juan", apellido: "Perez" })
// { Juan: "nombre", Perez: "apellido" }

invertirObjeto({ x: "mismo", y: "mismo" })
// { mismo: "y" }

invertirObjeto({})
// {}
```

### Restricciones

- Todas las claves y valores del objeto de entrada son strings.
- Si dos claves tienen el mismo valor, la que aparezca después en la iteración prevalece."""


def invertir_objeto(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = invertir_objeto
