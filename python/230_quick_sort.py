"""Quick Sort (master).

Source exercise: https://coding-challenges.dev/problems/python-quick-sort

## Quick Sort

Implementa el algoritmo de ordenamiento **Quick Sort** que recibe un array de números y retorna un **nuevo array** con los elementos ordenados de menor a mayor.

Debes implementar el algoritmo desde cero, sin usar el método nativo `.sort()` de JavaScript/TypeScript.

Quick Sort funciona eligiendo un elemento pivote y particionando el array en dos subarrays: los elementos menores al pivote y los mayores. Luego aplica el mismo proceso recursivamente a cada subarray.

## Ejemplos

```ts
quickSort([3, 1, 4, 1, 5, 9, 2, 6])  // [1, 1, 2, 3, 4, 5, 6, 9]
quickSort([])                          // []
quickSort([42])                        // [42]
quickSort([-3, -1, -5, 0])             // [-5, -3, -1, 0]
```

## Restricciones

- No puedes usar `.sort()` ni ningún algoritmo de ordenamiento nativo
- El array original no debe ser modificado
- Los elementos pueden ser negativos, cero o positivos
- El array puede tener elementos repetidos"""


def quick_sort(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = quick_sort
