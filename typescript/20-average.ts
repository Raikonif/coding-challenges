// Calcular el promedio de una lista — Fácil · Números
// Devuelve la media aritmética. Si la lista está vacía, devuelve 0.
// Fuente: https://coding-challenges.dev/problems/python-calcular-promedio

export function average(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
}
