"""Palabras Únicas (medium).

Source exercise: https://coding-challenges.dev/problems/python-palabras-unicas

Dada una cadena de texto con palabras separadas por espacios, devuelve un arreglo con las palabras que **aparecen exactamente una vez**, en el mismo orden en que aparecen por primera vez en la cadena.

La comparación debe ser **insensible a mayúsculas** (es decir, "Hola" y "hola" se consideran la misma palabra), pero las palabras en el resultado deben aparecer exactamente como fueron encontradas **la primera vez**.

## Ejemplos

```typescript
uniqueWords("hola mundo hola");           // ["mundo"]
uniqueWords("uno dos tres dos uno");      // ["tres"]
uniqueWords("a b c d");                   // ["a", "b", "c", "d"]
uniqueWords("Hola hola HOLA");            // []
uniqueWords("");                          // []
```

## Notas

- Si no hay palabras únicas, devuelve un arreglo vacío `[]`.
- La cadena puede estar vacía.
- No habrá puntuación, solo palabras y espacios."""


def unique_words(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = unique_words
