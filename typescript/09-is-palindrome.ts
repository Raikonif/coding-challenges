// ¿Es palíndromo? — Fácil · Strings
// Ignorando mayúsculas y minúsculas, determina si el string se lee igual
// de izquierda a derecha que de derecha a izquierda.
// Fuente: https://coding-challenges.dev/problems/typescript-es-palindromo

export function isPalindrome(text: string): boolean {
  const normalized = text.toLowerCase();
  return normalized === [...normalized].reverse().join("");
}
