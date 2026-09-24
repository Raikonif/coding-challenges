// Celsius a Fahrenheit — Fácil · Números
// Convierte con F = (C × 9/5) + 32 y redondea a dos decimales.
// Fuente: https://coding-challenges.dev/problems/celsius-a-fahrenheit

function celsiusToFahrenheit(celsius: number): number {
  return Math.round((celsius * 9 / 5 + 32) * 100) / 100;
}

// No modificar: necesario para evaluar el resultado.
export { celsiusToFahrenheit };
