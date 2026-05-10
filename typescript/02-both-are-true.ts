// ¿Ambos verdaderos?
// Fácil
// 10 pts
// Booleanos

// Enunciado
// Dados dos booleanos, devuelve true solo si ambos son true (compuerta AND).

// Ejemplo
// bothTrue(true, true)   → true
// bothTrue(true, false)  → false
// bothTrue(false, false) → false
// Puedes usar console.log() para depurar. Los resultados aparecen en la Consola de salida, no en el navegador.

function bothTrue(firstValue: boolean, secondValue: boolean): boolean {
  return firstValue && secondValue;
}

// No modificar: necesario para evaluar el resultado.
export { bothTrue };
