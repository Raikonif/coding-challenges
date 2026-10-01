"""Validar número de Luhn (hard).

Source exercise: https://coding-challenges.dev/problems/python-validar-numero-luhn

## Descripción

El **algoritmo de Luhn** es un método de suma de verificación usado para validar números de tarjetas de crédito y otros números de identificación.

Given un número representado como string, determina si es válido según el algoritmo de Luhn.

## Algoritmo

1. Recorre los dígitos de **derecha a izquierda**.
2. Los dígitos en posición **par** (contando desde 1, desde la derecha) se duplican. Si el resultado es mayor que 9, réstale 9.
3. Los dígitos en posición **impar** se toman tal cual.
4. Suma todos los dígitos resultantes. Si la suma es divisible entre 10, el número es válido.

## Ejemplos

```typescript
validateLuhn("4532015112830366") // true
validateLuhn("1234567890123456") // false
validateLuhn("79927398713")      // true
validateLuhn("79927398710")      // false
```

## Notas

- El string solo contendrá dígitos.
- El string tendrá al menos un dígito."""


def validate_luhn(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = validate_luhn
