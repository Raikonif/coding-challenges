// Contar elementos mayores que la media — Fácil · Arrays
// Cuenta los elementos estrictamente mayores que la media; [] devuelve 0.
// Fuente: https://coding-challenges.dev/problems/typescript-contar-elementos-mayor-media

export function countAboveAverage(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  const average = numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
  return numbers.filter((number) => number > average).length;
}
