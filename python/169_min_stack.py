"""MinStack: mínimo en O(1) (master).

Source exercise: https://coding-challenges.dev/problems/python-min-stack

## MinStack: mínimo en O(1)

Implementa una estructura de datos tipo pila (stack) que soporta las siguientes operaciones, todas en tiempo **O(1)**:

- `"push"` — apila el valor dado.
- `"pop"` — desapila el elemento superior. Nunca se llama si la pila está vacía.
- `"top"` — devuelve el elemento superior sin desapilarlo.
- `"getMin"` — devuelve el valor mínimo actual de la pila.

La función recibe un array de operaciones con el formato `[operacion, valor?]` y devuelve un array con los resultados de `"top"` y `"getMin"` (en el mismo orden en que aparecen). Las operaciones `"push"` y `"pop"` no producen salida.

## Ejemplo

```ts
minStack([
  ["push", -2],
  ["push", 0],
  ["push", -3],
  ["getMin"],   // -3
  ["pop"],
  ["top"],      // 0
  ["getMin"],   // -2
])
// [-3, 0, -2]
```

## Notas

- Todas las operaciones deben ser **O(1)**.
- La pila nunca estará vacía cuando se llame a `"top"`, `"pop"` o `"getMin"`."""


def min_stack(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = min_stack
