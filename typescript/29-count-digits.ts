// Contar dígitos — Fácil · Números
// El signo negativo no cuenta; el número 0 tiene un dígito.
// Fuente: https://coding-challenges.dev/problems/contar-digitos

function countDigits(n: number): number {
  return Math.abs(Math.trunc(n)).toString().length;
}

// No modificar: necesario para evaluar el resultado.
export { countDigits };
