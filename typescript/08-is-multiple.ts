// ¿Es múltiplo? — Fácil · Números
// Devuelve true si n es múltiplo de m. Si m es 0, devuelve false.
// Fuente: https://coding-challenges.dev/problems/es-multiplo

function isMultiple(n: number, m: number): boolean {
  return m !== 0 && n % m === 0;
}

// No modificar: necesario para evaluar el resultado.
export { isMultiple };
