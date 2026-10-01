"""Evaluar expresión booleana (master).

Source exercise: https://coding-challenges.dev/problems/python-evaluar-expresion-booleana

Dada una expresión booleana como array de tokens (`"true"`, `"false"`, `"AND"`, `"OR"`), evalúala de **izquierda a derecha** y devuelve el resultado.

Los tokens alternan entre valores (`"true"` / `"false"`) y operadores (`"AND"` / `"OR"`).

### Ejemplo

```
evaluateExpression(["true", "AND", "false"])              → false
evaluateExpression(["true", "OR", "false"])               → true
evaluateExpression(["true", "AND", "true", "OR", "false"])→ true
evaluateExpression(["false", "OR", "false", "AND", "true"])→ false
```"""


def evaluar_expresion_booleana(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = evaluar_expresion_booleana
