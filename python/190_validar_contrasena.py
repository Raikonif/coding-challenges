"""Validar contraseña (medium).

Source exercise: https://coding-challenges.dev/problems/python-validar-contrasena

Dada una cadena de texto, determina si es una contraseña válida según las siguientes reglas:

1. Tiene al menos **8 caracteres**.
2. Contiene al menos **una letra mayúscula** (A-Z).
3. Contiene al menos **un dígito** (0-9).
4. Contiene al menos **un símbolo especial** de entre: `!@#$%^&*`

Devuelve `true` si cumple todas las reglas, o `false` en caso contrario.

## Ejemplos

```ts
isValidPassword("Abcde1!")     // false  (solo 7 caracteres)
isValidPassword("Abcdefg1!")   // true
isValidPassword("abcdefg1!")   // false  (sin mayúscula)
isValidPassword("Abcdefgh!")   // false  (sin dígito)
isValidPassword("Abcdefg1")    // false  (sin símbolo)
isValidPassword("A1!")         // false  (menos de 8 chars)
```

## Notas

- Los símbolos válidos son exactamente: `!@#$%^&*`
- El orden de los caracteres no importa, solo su presencia."""


def is_valid_password(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = is_valid_password
