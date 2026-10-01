"""Sistema de autocompletado (hard).

Source exercise: https://coding-challenges.dev/problems/python-autocomplete-prefix-search

> Adaptado de [Daily Coding Problem](https://www.dailycodingproblem.com).

Este problema fue planteado por **Twitter**.

Implementa un sistema de autocompletado. Dado un string de consulta `s` y un conjunto de todos los posibles strings, devuelve todos los strings del conjunto que tengan a `s` como prefijo.

Por ejemplo, dado el query `"de"` y el conjunto `["dog", "deer", "deal"]`, devuelve `["deer", "deal"]`.

```typescript
autocomplete("de", ["dog", "deer", "deal"]);
// Resultado: ["deer", "deal"]

autocomplete("do", ["dog", "deer", "deal"]);
// Resultado: ["dog"]

autocomplete("cat", ["dog", "deer", "deal"]);
// Resultado: []
```

**Nota:** La función debe devolver los resultados en el mismo orden en que aparecen en el array de entrada.

**Bonus:** ¿Puedes preprocesar el diccionario en una estructura de datos más eficiente (como un Trie) para acelerar las consultas?"""


def autocomplete(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = autocomplete
