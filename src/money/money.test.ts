import { Money, Bank } from "./money";

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
