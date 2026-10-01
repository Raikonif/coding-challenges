"""Palabras que empiezan con vocal (easy).

Source exercise: https://coding-challenges.dev/problems/python-palabras-que-empiezan-con-vocal

## Palabras que empiezan con vocal

Dada una cadena de texto, cuenta cuántas palabras comienzan con una vocal (a, e, i, o, u), sin importar si es mayúscula o minúscula.

Las palabras están separadas por espacios. Se considera que no hay signos de puntuación pegados a las palabras.

## Ejemplos

```typescript
countWordsStartingWithVowel("hola amigo esto es un test")
// 3  ("amigo", "esto", "es")

countWordsStartingWithVowel("uno dos tres")
// 1  ("uno")

countWordsStartingWithVowel("All animals are awesome")
// 3  ("All", "animals", "are", "awesome" -> 4? no: "All","animals","are","awesome" -> 4)
```

**Nota:** "All" comienza con 'A' (vocal), "animals" con 'a', "are" con 'a', "awesome" con 'a' → 4.

## Restricciones

- La cadena puede estar vacía → retorna `0`.
- Las vocales son: a, e, i, o, u (y sus versiones en mayúscula).
"""


def count_words_starting_with_vowel(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = count_words_starting_with_vowel
