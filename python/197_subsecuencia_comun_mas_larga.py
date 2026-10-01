"""Subsecuencia común más larga (hard).

Source exercise: https://coding-challenges.dev/problems/python-subsecuencia-comun-mas-larga

## Subsecuencia común más larga

Dados dos strings `text1` y `text2`, devuelve la **longitud** de su subsecuencia común más larga (LCS).

Una **subsecuencia** es una secuencia de caracteres que aparece en el mismo orden en el string original, pero no necesariamente de forma contigua.

## Ejemplos

```
entrada: text1 = "abcde", text2 = "ace"
salida: 3
// La subsecuencia común más larga es "ace" (longitud 3).
```

```
entrada: text1 = "abc", text2 = "abc"
salida: 3
// El string completo es la LCS.
```

```
entrada: text1 = "abc", text2 = "def"
salida: 0
// No hay caracteres en común.
```

```
entrada: text1 = "ezupkr", text2 = "ubmrapg"
salida: 2
// La subsecuencia común más larga es "ur" (longitud 2).
```

## Restricciones

- `1 <= text1.length, text2.length <= 1000`
- Los strings contienen solo letras minúsculas.

## Pista

Usa programación dinámica con una tabla 2D donde `dp[i][j]` represente la LCS de los primeros `i` caracteres de `text1` y los primeros `j` caracteres de `text2`."""


def subsecuencia_comun_mas_larga(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = subsecuencia_comun_mas_larga
