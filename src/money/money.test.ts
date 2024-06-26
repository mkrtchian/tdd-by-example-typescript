// $5 + 10CHF = $10 si le taux est de 2:1
// hashCode()
// Duplication entre Dollar et Franc
// equals à mettre en commun
// times à mettre en commun
// ajouter le concept de currency

import { Franc, Money } from "./money";

it("multiplies dollar value with given value", () => {
  const five = Money.dollar(5);
  expect(five.times(2).equals(Money.dollar(10))).toBe(true);
  expect(five.times(3).equals(Money.dollar(15))).toBe(true);
});

it("multiplies franc value with given value", () => {
  const five = new Franc(5);
  expect(five.times(2).equals(new Franc(10))).toBe(true);
  expect(five.times(3).equals(new Franc(15))).toBe(true);
});

it("equals to object with the same attributes", () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  expect(new Franc(5).equals(new Franc(5))).toBe(true);
  expect(new Franc(5).equals(new Franc(6))).toBe(false);
  expect(new Franc(5).equals(Money.dollar(5))).toBe(false);
});
