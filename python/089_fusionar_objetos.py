"""Fusionar objetos (medium).

Source exercise: https://coding-challenges.dev/problems/python-fusionar-objetos

## Fusionar objetos

Escribe una función que reciba dos objetos y devuelva un **nuevo objeto** que contenga todas las propiedades de ambos.

### Reglas

- Si ambos objetos tienen la misma clave, el valor del **segundo objeto** debe prevalecer.
- No debes modificar los objetos originales.
- El resultado debe ser un objeto plano (no se requiere fusión profunda/recursiva).

### Ejemplos

```typescript
fusionarObjetos({ a: 1, b: 2 }, { b: 3, c: 4 })
// => { a: 1, b: 3, c: 4 }

fusionarObjetos({}, { x: 10 })
// => { x: 10 }

fusionarObjetos({ nombre: "Ana" }, { nombre: "Luis", edad: 25 })
// => { nombre: "Luis", edad: 25 }
```"""


def fusionar_objetos(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = fusionar_objetos
