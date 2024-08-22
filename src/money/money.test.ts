import { Money, Bank, Sum } from "./money";

describe("For dollars", () => {
  it("should ensure equality", () => {
    expect(Money.dollar(1).equals(Money.dollar(1))).toBe(true);
    expect(Money.dollar(1).equals(Money.dollar(2))).toBe(false);
    expect(Money.franc(1).equals(Money.dollar(1))).toBe(false);
  });

  it("should multiply the value", () => {
    expect(Money.dollar(5).times(2).equals(Money.dollar(10))).toBe(true);
    expect(Money.dollar(5).times(3).equals(Money.dollar(15))).toBe(true);
  });
});

describe("For CHF", () => {
  it("should return the currency", () => {
    expect(Money.franc(1).currency()).toBe("CHF");
    expect(Money.dollar(1).currency()).toBe("USD");
  });
});

it("Money with USD should be equal to dollar", () => {
  expect(new Money(1, "USD").equals(Money.dollar(1))).toBe(true);
});

it("should add two money", () => {
  const bank = new Bank();
  const sum = Money.dollar(5).plus(Money.dollar(5));
  const reduced = bank.reduce(sum, "USD");
  expect(reduced.equals(Money.dollar(10))).toBe(true);
});

it("plus should return a object with addend and augend", () => {
  const money1 = Money.dollar(3);
  const money2 = Money.dollar(2);
  const sum = money1.plus(money2);
  expect(sum.addend.equals(money2)).toBe(true);
  expect(sum.augend.equals(money1)).toBe(true);
});

it("Bank.reduce returns the correct sum", () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  const reduced = bank.reduce(sum, "USD");
  expect(reduced.equals(Money.dollar(7))).toBe(true);
});

it("Bank.reduce returns the correct Money", () => {
  const bank = new Bank();
  const reduced = bank.reduce(Money.dollar(3), "USD");
  expect(reduced.equals(Money.dollar(3))).toBe(true);
});

it("should reduce using a defined rate", () => {
  const bank = new Bank();
  bank.addRate("CHF", "USD", 1.18);
  const reduced = bank.reduce(Money.dollar(3), "CHF");
  expect(reduced.equals(Money.franc(3 / 1.18))).toBe(true);
});

it("should return rate 1 when input and output currency are the same", () => {
  const bank = new Bank();
  expect(bank.rate("USD", "USD")).toEqual(1);
});

it("should throw if rate doesn't exist", () => {
  const bank = new Bank();
  expect(() => bank.rate("CHF", "USD")).toThrow();
});
