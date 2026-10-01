"""Evaluar árbol de expresión (master).

Source exercise: https://coding-challenges.dev/problems/python-evaluar-arbol-expresion


## Evaluar árbol de expresión

Un árbol de expresión matemática se representa con objetos anidados. Cada nodo puede ser:

- Un **nodo hoja** con la forma `{ value: number }` que representa un número.
- Un **nodo operador** con la forma `{ operator: string, left: Node, right: Node }` que representa una operación binaria.

Los operadores soportados son: `"+"`, `"-"`, `"*"`, `"/"`.

Implementa la función `evaluateExpressionTree` que recibe la raíz del árbol y retorna el resultado numérico de la expresión. La división es entera (trunca hacia cero).

## Ejemplos

```ts
// Representa: (3 + 4) * 2 = 14
evaluateExpressionTree({
  operator: "*",
  left: { operator: "+", left: { value: 3 }, right: { value: 4 } },
  right: { value: 2 }
})
// 14

// Representa: 10 / (2 + 3) = 2
evaluateExpressionTree({
  operator: "/",
  left: { value: 10 },
  right: { operator: "+", left: { value: 2 }, right: { value: 3 } }
})
// 2

// Un solo nodo
evaluateExpressionTree({ value: 42 })
// 42
```

## Restricciones

- El árbol siempre es válido (no hay ciclos, los operadores siempre tienen `left` y `right`).
- La división siempre produce un resultado exacto o se trunca hacia cero.
- Los valores son enteros entre -1000 y 1000.
"""


def evaluar_arbol_expresion(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = evaluar_arbol_expresion
