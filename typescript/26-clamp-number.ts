// Clamp de número — Fácil · Números
// Limita num al rango inclusivo [min, max].
// Fuente: https://coding-challenges.dev/problems/clamp-de-numero

function clampNumber(num: number, min: number, max: number): number {
  return Math.max(min, Math.min(num, max));
}

// No modificar: necesario para evaluar el resultado.
export { clampNumber };
