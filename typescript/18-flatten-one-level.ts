// Aplanar un nivel — Fácil · Arrays
// Aplana solo los sub-arrays de primer nivel; no uses Array.prototype.flat().
// Fuente: https://coding-challenges.dev/problems/aplanar-un-nivel

function flattenOneLevel(array: (number | number[])[]): number[] {
  const flattened: number[] = [];
  for (const item of array) {
    if (Array.isArray(item)) flattened.push(...item);
    else flattened.push(item);
  }
  return flattened;
}

// No modificar: necesario para evaluar el resultado.
export { flattenOneLevel };
