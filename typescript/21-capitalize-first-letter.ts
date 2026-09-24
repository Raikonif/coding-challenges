// Capitalizar primera letra — Fácil · Strings
// Capitaliza la primera letra sin modificar el resto del string.
// Fuente: https://coding-challenges.dev/problems/capitalizar-primer-letra

function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// No modificar: necesario para evaluar el resultado.
export { capitalizeFirstLetter };
