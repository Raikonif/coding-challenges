// ¿Termina con sufijo? — Fácil · Strings
// Refactoriza el código para hacerlo más conciso y legible.
// Restricción: no uses .endsWith().
// Fuente: https://coding-challenges.dev/problems/typescript-termina-con-sufijo

export function endsWithSuffix(str: string, suffix: string): boolean {
  if (suffix.length === 0) {
    return true;
  }
  if (suffix.length > str.length) {
    return false;
  }
  const strEnd = str.substring(str.length - suffix.length);
  let matches = true;
  for (let i = 0; i < suffix.length; i++) {
    if (strEnd[i] !== suffix[i]) {
      matches = false;
      break;
    }
  }
  return matches;
}
