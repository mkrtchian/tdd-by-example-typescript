// $5 + 10CHF = $10 si le taux est de 2:1
// Mettre “amount” en privé
// hashCode()

import { Dollar } from "./money";

it("multiplies money value with given value", () => {
  const five = new Dollar(5);
  let product = five.times(2);
  expect(product.equals(new Dollar(10))).toBe(true);
  product = five.times(3);
  expect(product.equals(new Dollar(15))).toBe(true);
});

it("equals to object with the same attributes", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
});
