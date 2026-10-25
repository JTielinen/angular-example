import { PriceCalculator } from './price-calculator';

describe('PriceCalculator', () => {
  let calculator: PriceCalculator;

  beforeEach(() => {
    calculator = new PriceCalculator();
  });

  it('should calculate correct discounted price with normal values', () => {
    const result = calculator.calculateDiscount(100, 20);
    expect(result).toBe(80);
  });

  it('should return 0 when price is 0 or discount is 100%', () => {
    expect(calculator.calculateDiscount(0, 15)).toBe(0);
    expect(calculator.calculateDiscount(200, 100)).toBe(0);
  });

  it('should throw an error when negative price or discount is provided', () => {
    expect(() => calculator.calculateDiscount(-50, 10)).toThrowError('Arvot eivät voi olla negatiivisia');
    expect(() => calculator.calculateDiscount(100, -5)).toThrowError('Arvot eivät voi olla negatiivisia');
  });

  it('should throw an error when discount exceeds 100%', () => {
    expect(() => calculator.calculateDiscount(100, 105)).toThrowError('Alennusprosentti ei voi olla yli 100');
  });

  it('should correctly identify even numbers across zero, negative, and positive values', () => {
    expect(calculator.isEven(0)).toBe(true);
    expect(calculator.isEven(-4)).toBe(true);
    expect(calculator.isEven(-3)).toBe(false);
    expect(calculator.isEven(7)).toBe(false);
  });
});