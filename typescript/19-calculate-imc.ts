// Calcular el IMC — Fácil · Números
// Calcula peso / (altura²) y redondea el resultado a dos decimales.
// Fuente: https://coding-challenges.dev/problems/typescript-calcular-imc

export function calculateIMC(weight: number, height: number): number {
  return Math.round((weight / height ** 2) * 100) / 100;
}
