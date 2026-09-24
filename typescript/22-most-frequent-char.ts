// Carácter más frecuente — Fácil · Strings
// En caso de empate, devuelve el carácter que aparece primero.
// Fuente: https://coding-challenges.dev/problems/typescript-caracter-mas-frecuente

export function mostFrequentChar(text: string): string {
  const counts = new Map<string, number>();
  let mostFrequent = "";
  let highestCount = 0;
  for (const char of text) {
    const count = (counts.get(char) ?? 0) + 1;
    counts.set(char, count);
    if (count > highestCount) {
      mostFrequent = char;
      highestCount = count;
    }
  }
  return mostFrequent;
}
