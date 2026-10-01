"""Refactoriza: calificaciones de estudiante (hard).

Source exercise: https://coding-challenges.dev/problems/python-refactoriza-calificaciones-estudiante

## Contexto

Tienes una función que procesa las calificaciones de un estudiante y devuelve un objeto con su promedio, letra de calificación, si aprobó y cuántos puntos de bono recibe. El problema: toda la lógica vive en una sola función larga, con números mágicos por todas partes y variables de una letra.

## Tu tarea

Refactoriza la función `processStudentGrades` para que:

1. **Elimines los números mágicos** — extrae constantes como `PASSING_SCORE`, `GRADE_A_THRESHOLD`, etc.
2. **Renombres las variables** — elimina letras sueltas y usa nombres que expresen intención
3. **Extraigas funciones auxiliares** — al menos una función por responsabilidad: calcular promedio, determinar letra, calcular bono

## Reglas del negocio

- El promedio se calcula sobre todos los puntajes (redondea a 1 decimal)
- Letra de calificación: `A` (≥90), `B` (≥80), `C` (≥70), `D` (≥60), `F` (<60)
- Aprobado si el promedio es **≥ 60**
- Bono: si la materia es `"math"` y el promedio ≥ 90 → **+10 puntos**; si la materia es `"science"` y el promedio ≥ 80 → **+5 puntos**; en cualquier otro caso → **0**"""


def refactoriza_calificaciones_estudiante(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = refactoriza_calificaciones_estudiante
