/**
 * Salas de reuniones mínimas (hard).
 * Source exercise: https://coding-challenges.dev/problems/minimum-meeting-rooms
 * Prompt and examples:
 * > Adaptado de [Daily Coding Problem](https://www.dailycodingproblem.com).
 *
 * Este ejercicio fue preguntado por **Snapchat**.
 *
 * Dado un arreglo de intervalos `[inicio, fin]` que representan reuniones programadas (donde algunas pueden traslaparse), encuentra el **número mínimo de salas de reuniones** necesarias para que todas puedan realizarse.
 *
 * > Una sala puede reutilizarse si la siguiente reunión empieza **en el mismo momento o después** de que la anterior termine.
 *
 * ## Ejemplos
 *
 * **Ejemplo 1:**
 * ```
 * intervals = [[30, 75], [0, 50], [60, 150]]
 *
 * Ordenadas por inicio: [0,50], [30,75], [60,150]
 *   [0,50]   → Sala 1
 *   [30,75]  → Se traslapa con [0,50] (30 < 50) → Sala 2
 *   [60,150] → [0,50] ya terminó (60 >= 50)  → reutiliza Sala 1
 *
 * Resultado: 2
 * ```
 *
 * **Ejemplo 2:**
 * ```
 * intervals = [[0, 10], [10, 20], [20, 30]]
 *
 * Cada reunión empieza exactamente cuando termina la anterior.
 * → No hay traslape, una sola sala es suficiente.
 *
 * Resultado: 1
 * ```
 *
 * **Ejemplo 3:**
 * ```
 * intervals = [[0, 10], [0, 10], [0, 10]]
 *
 * Tres reuniones con el mismo horario → necesitan 3 salas distintas.
 *
 * Resultado: 3
 * ```
 *
 * ## Notas
 * - Si el arreglo está vacío, retorna `0`.
 * - Dos reuniones **no se traslapan** si una termina exactamente cuando la otra comienza (ej: `[0,10]` y `[10,20]`).
 */
export function minimumMeetingRooms(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = minimumMeetingRooms;
