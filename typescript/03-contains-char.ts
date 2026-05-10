// ¿Contiene el carácter?
// Fácil
// 10 pts
// Strings

// Enunciado
// Devuelve true si el string contiene el carácter dado, false si no.

// Ejemplo
// containsChar("hola", "o") → true
// containsChar("hola", "z") → false

function containsChar(text: string, char: string): boolean {
  return text.includes(char);
}

// No modificar: necesario para evaluar el resultado.
export { containsChar };
