// $5 + 10CHF = $10 si le taux est de 2:1
// $5 + $5 = $10

import { Money } from "./money";

it("multiplies dollar value with given value", () => {
  const five = Money.dollar(5);
  expect(five.times(2).equals(Money.dollar(10))).toBe(true);
  expect(five.times(3).equals(Money.dollar(15))).toBe(true);
});

it("equals to object with the same attributes", () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
});

it("returns the currency of the money", () => {
  expect(Money.dollar(1).currency()).toBe("USD");
  expect(Money.franc(1).currency()).toBe("CHF");
});

it('adds two money values', () => {
  expect(reduced.equals(Money.dollar(10)).toBe(true));
})
