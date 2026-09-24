// Año bisiesto — Fácil · Números
// Es bisiesto si es divisible por 400, o por 4 pero no por 100.
// Fuente: https://coding-challenges.dev/problems/typescript-ano-bisiesto

export function isLeapYear(year: number): boolean {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
