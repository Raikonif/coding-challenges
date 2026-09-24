// Contar consonantes — Fácil · Strings
// Cuenta consonantes a-z/A-Z e ignora caracteres no alfabéticos.
// Fuente: https://coding-challenges.dev/problems/contar-consonantes

function countConsonants(text: string): number {
  return (text.match(/[b-df-hj-np-tv-z]/gi) ?? []).length;
}

// No modificar: necesario para evaluar el resultado.
export { countConsonants };
