/**
 * Fabric Weight Converter
 *
 * Conversion factor: 1 oz/yd² = 33.9057474 g/m²
 */

const FACTOR = 33.9057474;

/**
 * Convert Grams per Square Meter (GSM) to Ounces per Square Yard (oz/yd²)
 * @param gsm - Weight in g/m²
 * @param precision - Number of decimal places (default: 2)
 * @returns Weight in oz/yd²
 */
export function gsmToOz(gsm: number, precision: number = 2): number {
  if (gsm < 0) {
    throw new Error("Weight cannot be negative");
  }
  const result = gsm / FACTOR;
  return Number(result.toFixed(precision));
}

/**
 * Convert Ounces per Square Yard (oz/yd²) to Grams per Square Meter (GSM)
 * @param oz - Weight in oz/yd²
 * @param precision - Number of decimal places (default: 0 for GSM usually, but lets default to 1)
 * @returns Weight in g/m²
 */
export function ozToGsm(oz: number, precision: number = 1): number {
  if (oz < 0) {
    throw new Error("Weight cannot be negative");
  }
  const result = oz * FACTOR;
  return Number(result.toFixed(precision));
}

/**
 * Alias for gsmToOz
 */
export const kToZ = gsmToOz;

/**
 * Alias for ozToGsm
 */
export const zToK = ozToGsm;
