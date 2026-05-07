// ¿Al menos uno es verdadero?
// Fácil
// 10 pts
// Booleanos

// Enunciado
// Dados dos booleanos, devuelve true si al menos uno de los dos es true (compuerta OR).

// Ejemplo
// atLeastOneTrue(true, false)  → true
// atLeastOneTrue(false, false) → false
// atLeastOneTrue(true, true)   → true
// Puedes usar console.log() para depurar. Los resultados aparecen en la Consola de salida, no en el navegador.

function atLeastOneTrue(firstValue: boolean, secondValue: boolean): boolean {
  return firstValue || secondValue;
}

// No modificar: necesario para evaluar el resultado.
export { atLeastOneTrue };
