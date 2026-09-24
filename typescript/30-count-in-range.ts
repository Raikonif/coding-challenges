// Contar elementos en rango — Fácil · Arrays
// Cuenta los elementos dentro del rango inclusivo [min, max].
// Fuente: https://coding-challenges.dev/problems/typescript-contar-elementos-en-rango

export function contarEnRango(numbers: number[], min: number, max: number): number {
  return numbers.filter((number) => min <= number && number <= max).length;
}
