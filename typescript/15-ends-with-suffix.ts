// ¿Termina con sufijo? — Fácil · Strings
// Refactoriza el código para hacerlo más conciso y legible.
// Restricción: no uses .endsWith().
// Fuente: https://coding-challenges.dev/problems/typescript-termina-con-sufijo

export function endsWithSuffix(str: string, suffix: string): boolean {
  return suffix.length === 0 ||
    (suffix.length <= str.length && str.slice(-suffix.length) === suffix);
}
