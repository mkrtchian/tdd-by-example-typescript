import { Money } from "./money";

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
  expect(Money.dollar(5).plus(Money.dollar(5)).equals(Money.dollar(10))).toBe(
    true,
  );
});
