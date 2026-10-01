"""Intervalo mínimo para cubrir consulta (hard).

Source exercise: https://coding-challenges.dev/problems/python-intervalo-minimo-para-cubrir-consulta

## Intervalo mínimo para cubrir consulta

Dada una lista de intervalos `[inicio, fin]` y una lista de consultas (números enteros), para cada consulta encuentra el **tamaño del intervalo más pequeño** que la contiene.

El tamaño de un intervalo `[inicio, fin]` se calcula como `fin - inicio + 1`.

Si ningún intervalo contiene la consulta, devuelve `-1` para esa posición.

---

## Parámetros

- `intervals`: `number[][]` — Lista de intervalos, donde cada elemento es `[inicio, fin]` con `inicio <= fin`.
- `queries`: `number[]` — Lista de valores a buscar dentro de los intervalos.

## Retorno

`number[]` — Array de respuestas en el **mismo orden** que las consultas. Cada elemento es el tamaño del intervalo más pequeño que contiene la consulta, o `-1` si no existe.

---

## Ejemplos

### Ejemplo 1

```ts
intervalMinSize([[1,4],[2,4],[3,6],[4,4]], [2,3,4,5])
// Resultado: [3, 3, 1, 4]
```

**Explicación:**
- Consulta `2`: intervalos que la contienen son `[1,4]` (tamaño 4) y `[2,4]` (tamaño 3). El mínimo es `3`.
- Consulta `3`: intervalos `[1,4]` (4), `[2,4]` (3), `[3,6]` (4). El mínimo es `3`.
- Consulta `4`: intervalos `[1,4]` (4), `[2,4]` (3), `[3,6]` (4), `[4,4]` (1). El mínimo es `1`.
- Consulta `5`: solo `[3,6]` (tamaño 4). Resultado: `4`.

### Ejemplo 2

```ts
intervalMinSize([[2,3],[2,5],[1,8],[20,25]], [2,19,5,22])
// Resultado: [2, -1, 4, 6]
```

---

## Restricciones

- `1 <= intervals.length <= 10^5`
- `1 <= queries.length <= 10^5`
- `1 <= inicio <= fin <= 10^7`
- `1 <= queries[i] <= 10^7`"""


def intervalo_minimo_para_cubrir_consulta(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = intervalo_minimo_para_cubrir_consulta
