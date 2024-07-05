// $5 + 10CHF = $10 si le taux est de 2:1
// hashCode()
// Duplication entre Dollar et Franc
// times à mettre en commun
// Supprimer le test de multiplication de Franc

import { Money } from "./money";

it("multiplies dollar value with given value", () => {
  const five = Money.dollar(5);
  expect(five.times(2).equals(Money.dollar(10))).toBe(true);
  expect(five.times(3).equals(Money.dollar(15))).toBe(true);
});

it("multiplies franc value with given value", () => {
  const five = Money.franc(5);
  expect(five.times(2).equals(Money.franc(10))).toBe(true);
  expect(five.times(3).equals(Money.franc(15))).toBe(true);
});

it("equals to object with the same attributes", () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
  expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
  expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
});

it("returns the currency of the money", () => {
  expect(Money.dollar(1).currency()).toBe("USD");
  expect(Money.franc(1).currency()).toBe("CHF");
});

test("Money and dollar with same amount are equal", () => {
  expect(new Money(10, "USD").equals(new Dollar(10, "USD"))).toBe(true);
});
