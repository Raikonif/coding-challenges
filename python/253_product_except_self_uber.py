"""Producto de todos excepto índice (hard).

Source exercise: https://coding-challenges.dev/problems/python-product-except-self-uber

> Adaptado de [Daily Coding Problem](https://www.dailycodingproblem.com).

> Este problema fue usado por **Uber** en sus entrevistas técnicas.

Dado un array de enteros, retorna un nuevo array tal que cada elemento en el índice `i` sea el producto de todos los números del array original excepto el que está en `i`.

```python
product_except_self([1, 2, 3, 4, 5])
# → [120, 60, 40, 30, 24]

product_except_self([3, 2, 1])
# → [2, 3, 6]
```

Por ejemplo, para `[1, 2, 3, 4, 5]` el resultado es `[120, 60, 40, 30, 24]` porque:
- Índice 0: 2 × 3 × 4 × 5 = 120
- Índice 1: 1 × 3 × 4 × 5 = 60
- Índice 2: 1 × 2 × 4 × 5 = 40
- Índice 3: 1 × 2 × 3 × 5 = 30
- Índice 4: 1 × 2 × 3 × 4 = 24

Bonus: ¿Puedes resolverlo sin usar división?"""


def product_except_self(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = product_except_self
