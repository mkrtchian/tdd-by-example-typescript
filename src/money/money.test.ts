// $5 + 10CHF = $10 si le taux est de 2:1
// hashCode()
// Duplication entre Dollar et Franc
// equals à mettre en commun
// times à mettre en commun
// ajouter le concept de currency

import { Dollar, Franc } from "./money";

it("multiplies dollar value with given value", () => {
  const five = new Dollar(5);
  expect(five.times(2).equals(new Dollar(10))).toBe(true);
  expect(five.times(3).equals(new Dollar(15))).toBe(true);
});

it("multiplies franc value with given value", () => {
  const five = new Franc(5);
  expect(five.times(2).equals(new Franc(10))).toBe(true);
  expect(five.times(3).equals(new Franc(15))).toBe(true);
});

it("equals to object with the same attributes", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  expect(new Franc(5).equals(new Franc(5))).toBe(true);
  expect(new Franc(5).equals(new Franc(6))).toBe(false);
  expect(new Franc(5).equals(new Dollar(5))).toBe(false);
});
