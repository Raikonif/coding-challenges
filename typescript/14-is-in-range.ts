// ¿Está en rango? — Fácil · Booleanos
// Devuelve true si min <= num <= max, incluyendo ambos extremos.
// Fuente: https://coding-challenges.dev/problems/typescript-esta-en-rango

export function isInRange(num: number, min: number, max: number): boolean {
  return min <= num && num <= max;
}
