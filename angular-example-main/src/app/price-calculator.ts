export class PriceCalculator {
  calculateDiscount(price: number, discountPercent: number): number {
    if (price < 0 || discountPercent < 0) {
      throw new Error('Arvot eivät voi olla negatiivisia');
    }
    if (discountPercent > 100) {
      throw new Error('Alennusprosentti ei voi olla yli 100');
    }
    const discount = price * (discountPercent / 100);
    return Number((price - discount).toFixed(2));
  }

  isEven(value: number): boolean {
    return value % 2 === 0;
  }
}