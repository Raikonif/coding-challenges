// Cifrado ROT13 — Fácil · Strings
// Rota letras dentro de A-Z/a-z y conserva los demás caracteres.
// Fuente: https://coding-challenges.dev/problems/typescript-cifrar-rot13

export function rot13(text: string): string {
  return text.replace(/[a-z]/gi, (char) => {
    const base = char <= "Z" ? 65 : 97;
    return String.fromCharCode((char.charCodeAt(0) - base + 13) % 26 + base);
  });
}
