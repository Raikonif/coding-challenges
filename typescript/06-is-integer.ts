// ¿Es entero?
// Fácil
// 10 pts
// Números

// Enunciado
// Dado un número, devuelve true si es un número entero (sin parte decimal).

// Ejemplo
// isInteger(5)    → true
// isInteger(3.14) → false
// isInteger(0)    → true
// isInteger(-7)   → true
// Puedes usar console.log() para depurar. Los resultados aparecen en la Consola de salida, no en el navegador.

function isInteger(value: number): boolean {
  return Number.isInteger(value);
}

// No modificar: necesario para evaluar el resultado.
export { isInteger };
