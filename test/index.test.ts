import { describe, it, expect } from 'vitest';
import { gsmToOz, ozToGsm } from '../src/index';

describe('Fabric Weight Converter', () => {
  describe('gsmToOz', () => {
    it('should convert GSM to Oz correctly', () => {
      // 33.9057... gsm = 1 oz
      expect(gsmToOz(33.91)).toBe(1);
      expect(gsmToOz(0)).toBe(0);
      expect(gsmToOz(100)).toBe(2.95);
    });

    it('should throw error for negative values', () => {
      expect(() => gsmToOz(-1)).toThrow();
    });

    it('should handle custom precision', () => {
      expect(gsmToOz(100, 4)).toBe(2.9494);
    });
  });

  describe('ozToGsm', () => {
    it('should convert Oz to GSM correctly', () => {
      expect(ozToGsm(1)).toBe(33.9);
      expect(ozToGsm(0)).toBe(0);
      expect(ozToGsm(2.95)).toBe(100); // approx
    });

    it('should throw error for negative values', () => {
      expect(() => ozToGsm(-1)).toThrow();
    });
    
    it('should handle custom precision', () => {
       expect(ozToGsm(1, 4)).toBe(33.9057);
    });
  });
});
