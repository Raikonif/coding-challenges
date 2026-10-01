/**
 * Refactoriza: factura de electricidad (medium).
 * Source exercise: https://coding-challenges.dev/problems/refactoriza-factura-electricidad
 * Prompt and examples:
 * ## Contexto
 *
 * Una empresa de servicios públicos calcula la factura de electricidad de sus clientes según el tipo de contrato y el consumo mensual en kilowatts-hora (kWh).
 *
 * ## Tu tarea
 *
 * Refactoriza la función `calculateElectricityBill` para que sea limpia, legible y mantenible. El comportamiento debe ser idéntico al original.
 *
 * ## Reglas de negocio
 *
 * - **Residencial**: primer tramo hasta 100 kWh a $0.10/kWh, de 101 a 300 kWh a $0.15/kWh, más de 300 kWh a $0.20/kWh
 * - **Comercial**: tarifa plana de $0.18/kWh, con 10% de descuento si el consumo supera 500 kWh
 * - **Industrial**: tarifa plana de $0.12/kWh, con 15% de descuento si el consumo supera 1000 kWh, más un cargo fijo de $50
 * - En todos los casos, el monto mínimo a cobrar es $5
 *
 * ## Problemas a corregir
 *
 * - Elimina los **números mágicos** y extrae **constantes con nombre descriptivo** en `UPPER_SNAKE_CASE`
 * - Renombra las **variables de una sola letra** con nombres que expresen su propósito
 * - Extrae **funciones auxiliares** que encapsulen la lógica por tipo de cliente
 * - Aplica el **principio de responsabilidad única**: cada función debe hacer una sola cosa
 */
export function refactorizaFacturaElectricidad(...args: any[]): any {
  throw new Error("Complete this exercise to make its tests pass.");
}

export const solve = refactorizaFacturaElectricidad;
