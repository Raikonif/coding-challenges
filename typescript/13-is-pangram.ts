// ¿Es un pangrama? — Fácil · Strings
// Devuelve true si contiene todas las letras del alfabeto inglés, sin importar
// mayúsculas y minúsculas. Números, espacios y signos no cuentan como letras.
// Fuente: https://coding-challenges.dev/problems/typescript-es-pangrama

export function isPangram(sentence: string): boolean {
  const letters = new Set(sentence.toLowerCase().match(/[a-z]/g));
  return letters.size === 26;
}
