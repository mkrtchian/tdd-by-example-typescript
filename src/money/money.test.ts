// $5 + 10CHF = $10 si le taux est de 2:1
// hashCode()
// 5 CHF * 2 = 10 CHF

import { Dollar } from "./money";

it("multiplies money value with given value", () => {
  const five = new Dollar(5);
  expect(five.times(2).equals(new Dollar(10))).toBe(true);
  expect(five.times(3).equals(new Dollar(15))).toBe(true);
});

it("equals to object with the same attributes", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
});
