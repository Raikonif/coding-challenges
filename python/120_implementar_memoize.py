"""Implementar memoize (hard).

Source exercise: https://coding-challenges.dev/problems/python-implementar-memoize

## Implementar memoize

La memoización es una técnica de optimización que almacena los resultados de llamadas a funciones costosas y los reutiliza cuando se vuelven a llamar con los mismos argumentos, evitando recalcular.

## Tu tarea

Implementa la función `memoize` que recibe una función `fn` y devuelve una versión cacheada de ella. Luego, usa `memoize` para crear `memoizeSum`, una versión cacheada de `(a, b) => a + b`.

## Cómo funciona memoize

```
const memoizeSum = memoize((a, b) => a + b);

memoizeSum(1, 2)  // Calcula y guarda en caché: 3
memoizeSum(1, 2)  // Devuelve desde caché: 3 (sin recalcular)
memoizeSum(3, 4)  // Calcula y guarda en caché: 7
```

## Implementación sugerida

- Usa un `Map` para almacenar los resultados previos.
- La clave del caché debe basarse en los argumentos. Puedes usar `JSON.stringify(args)`.
- Si los argumentos ya están en el caché, devuelve el valor almacenado.
- Si no, ejecuta `fn`, guarda el resultado y devuélvelo.

## Notas

- La función `memoizeSum` exportada es la que se evaluará con los test cases.
- Los test cases verifican que `memoizeSum` retorna los resultados correctos de la suma."""


def memoize(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = memoize
