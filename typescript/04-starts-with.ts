// ¿Empieza con el prefijo?
// Fácil
// 10 pts
// Strings

// Enunciado
// Descripción
// Dado un string text y un string prefix, devuelve true si text comienza exactamente con prefix, o false en caso contrario.

// La comparación es sensible a mayúsculas y minúsculas.

// Ejemplos
// startsWith("hola mundo", "hola")  // true
// startsWith("hola mundo", "Hola")  // false
// startsWith("TypeScript", "Type")  // true
// startsWith("TypeScript", "script") // false
// startsWith("", "")                // true
// startsWith("abc", "")             // true
// Notas
// Si prefix es un string vacío, siempre devuelve true.
// Si text es más corto que prefix, devuelve false.
// No uses el método nativo String.prototype.startsWith.
// Puedes usar console.log() para depurar. Los resultados aparecen en la Consola de salida, no en el navegador.

function startsWith(text: string, prefix: string): boolean {
  return text.startsWith(prefix);
}

// No modificar: necesario para evaluar el resultado.
export { startsWith };
