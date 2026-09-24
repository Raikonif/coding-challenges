// ¿Es cuadrado perfecto? — Fácil · Números
// Dado un entero no negativo, devuelve true si es un cuadrado perfecto.
// No uses Math.sqrt() ni otra función de raíz cuadrada.
// Fuente: https://coding-challenges.dev/problems/typescript-es-cuadrado-perfecto

export function isPerfectSquare(n: number): boolean {
  if (n < 0) return false;
  for (let candidate = 0; candidate * candidate <= n; candidate++) {
    if (candidate * candidate === n) return true;
  }
  return false;
}
