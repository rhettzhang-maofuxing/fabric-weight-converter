/**
 * Fabric Weight Converter
 *
 * Conversion factor: 1 oz/yd² = 33.9057474 g/m²
 */
/**
 * Convert Grams per Square Meter (GSM) to Ounces per Square Yard (oz/yd²)
 * @param gsm - Weight in g/m²
 * @param precision - Number of decimal places (default: 2)
 * @returns Weight in oz/yd²
 */
declare function gsmToOz(gsm: number, precision?: number): number;
/**
 * Convert Ounces per Square Yard (oz/yd²) to Grams per Square Meter (GSM)
 * @param oz - Weight in oz/yd²
 * @param precision - Number of decimal places (default: 0 for GSM usually, but lets default to 1)
 * @returns Weight in g/m²
 */
declare function ozToGsm(oz: number, precision?: number): number;
/**
 * Alias for gsmToOz
 */
declare const kToZ: typeof gsmToOz;
/**
 * Alias for ozToGsm
 */
declare const zToK: typeof ozToGsm;

export { gsmToOz, kToZ, ozToGsm, zToK };
