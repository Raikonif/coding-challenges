// Contar caracteres únicos — Fácil · Strings
// Cuenta caracteres distintos, distinguiendo mayúsculas y minúsculas.
// Fuente: https://coding-challenges.dev/problems/typescript-contar-caracteres-unicos

export function countUniqueChars(text: string): number {
  return new Set(text).size;
}
