// ¿Es divisible?
// Fácil
// 10 pts
// Números

// Enunciado
// Dados dos números n y divisor, devuelve true si n es divisible por divisor (sin residuo).

// Ejemplo
// isDivisible(10, 2)  → true
// isDivisible(7, 2)   → false
// isDivisible(9, 3)   → true
// Puedes usar console.log() para depurar. Los resultados aparecen en la Consola de salida, no en el navegador.

function isDivisible(value: number, divisor: number): boolean {
  return value % divisor == 0;
}

// No modificar: necesario para evaluar el resultado.
export { isDivisible };
