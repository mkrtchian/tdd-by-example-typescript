// $5 + 10CHF = $10 si le taux est de 2:1
// $5 + $5 = $10
// Retourner Money à partir de $5 + $5

import { Bank, Money, Sum } from "./money";

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
  const five = Money.dollar(5);
  const sum = five.plus(five);
  const bank= new Bank();
  const reduced = bank.reduce(sum, "USD");
  expect(reduced.equals(Money.dollar(10))).toBe(true);
})

it('returns a sum when using plus', () => {
  const five = Money.dollar(5);
  const sum = five.plus(five);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  expect((sum as Sum).augend.equals(five)).toBe(true);
  expect((sum as Sum).addend.equals(five)).toBe(true);
});

it('reduces the sum of dollars to a dollar', () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  const result = bank.reduce(sum, "USD");
  expect(result.equals(Money.dollar(7))).toBe(true);
});
