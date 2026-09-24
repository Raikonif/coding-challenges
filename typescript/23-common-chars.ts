// Caracteres en común — Fácil · Strings
// Cuenta los caracteres distintos compartidos por ambas cadenas, ignorando
// mayúsculas y minúsculas.
// Fuente: https://coding-challenges.dev/problems/typescript-caracteres-en-comun

export function commonChars(a: string, b: string): number {
  const charsA = new Set(a.toLowerCase());
  const charsB = new Set(b.toLowerCase());
  return [...charsA].filter((char) => charsB.has(char)).length;
}
