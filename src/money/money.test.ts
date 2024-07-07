// Retourner Money à partir de $5 + $5
// Implémentation de Sum.plus
// Mettre times dans Expression

import { Bank, Money, RateNotDefinedError, Sum } from "./money";

it("multiplies dollar value with given value", () => {
  const five = Money.dollar(5);
  expect(five.times(2).equals(Money.dollar(10))).toBe(true);
  expect(five.times(3).equals(Money.dollar(15))).toBe(true);
});

it("equals to object with the same attributes", () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  expect(Money.franc(5).equals(Money.dollar(5))).toBe(true);
});

it("returns the currency of the money", () => {
  expect(Money.dollar(1).currency()).toBe("USD");
  expect(Money.franc(1).currency()).toBe("CHF");
});

it("adds two money values", () => {
  const five = Money.dollar(5);
  const sum = five.plus(five);
  const bank = new Bank();
  const reduced = bank.reduce(sum, "USD");
  expect(reduced.equals(Money.dollar(10))).toBe(true);
});

it("returns a sum when using plus", () => {
  const five = Money.dollar(5);
  const sum = five.plus(five) as Sum;
  expect((sum.augend as Money).equals(five)).toBe(true);
  expect((sum.addend as Money).equals(five)).toBe(true);
});

it("reduces the sum of dollars to a dollar", () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  const result = bank.reduce(sum, "USD");
  expect(result.equals(Money.dollar(7))).toBe(true);
});

it("reduces a money to a money", () => {
  const bank = new Bank();
  const result = bank.reduce(Money.dollar(1), "USD");
  expect(result.equals(Money.dollar(1))).toBe(true);
});

it("reduces money with different currencies", () => {
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result = bank.reduce(Money.franc(2), "USD");
  expect(result.equals(Money.dollar(1))).toBe(true);
});

it("uses a rate of 1 when the currencies are the same", () => {
  const bank = new Bank();
  expect(bank.rate("USD", "USD")).toBe(1);
});

it("throws an error when rate is not defined", () => {
  expect.assertions(1);
  const bank = new Bank();
  try {
    bank.rate("CHF", "USD");
  } catch (error) {
    expect(error).toBeInstanceOf(RateNotDefinedError);
  }
});

it("adds two expressions with mixed currencies", () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
  expect(result.equals(Money.dollar(10))).toBe(true);
});

it("adds a sum and a money", () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
  const result = bank.reduce(sum, "USD");
  expect(result.equals(Money.dollar(15))).toBe(true);
});

it("multiplies a sum with a money", () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const sum = new Sum(fiveBucks, tenFrancs).times(2);
  const result = bank.reduce(sum, "USD");
  expect(result.equals(Money.dollar(20))).toBe(true);
});
