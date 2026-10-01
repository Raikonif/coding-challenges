/**
 * Extraer valores con defecto (easy).
 * Source exercise: https://coding-challenges.dev/problems/extraer-valores-con-defecto
 * Prompt and examples:
 *
 * ## Extraer valores con defecto
 *
 * Dado un objeto con propiedades opcionales, implementa una función que extraiga sus valores aplicando valores por defecto cuando alguna propiedad no exista o sea `undefined`.
 *
 * La función recibe un objeto parcial y un objeto de valores por defecto. Debe retornar un nuevo objeto combinando ambos: si el objeto original tiene la propiedad, usa ese valor; si no, usa el valor por defecto.
 *
 * ### Ejemplo
 *
 * ```typescript
 * const usuario = { nombre: "Ana", edad: undefined };
 * const defecto = { nombre: "Anónimo", edad: 18, activo: true };
 *
 * extraerConDefecto(usuario, defecto);
 * // { nombre: "Ana", edad: 18, activo: true }
 * ```
 *
 * ### Notas
 *
 * - Las propiedades con valor `undefined` se reemplazan con el valor por defecto.
 * - Las propiedades con valor `null` se conservan tal cual (solo `undefined` se reemplaza).
 * - Si el objeto original tiene una propiedad que los defectos no tienen, se incluye igualmente.
 *
 */
export function extraerConDefecto(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = extraerConDefecto;
