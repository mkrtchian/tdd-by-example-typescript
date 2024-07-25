import { Money } from "./money";

describe("For dollars", () => {
  it("should ensure equality", () => {
    expect(Money.dollar(1).equals(Money.dollar(1))).toBe(true);
    expect(Money.dollar(1).equals(Money.dollar(2))).toBe(false);
    expect(Money.franc(1).equals(Money.franc(1))).toBe(true);
    expect(Money.franc(1).equals(Money.franc(2))).toBe(false);
    expect(Money.franc(1).equals(Money.dollar(1))).toBe(false);
  });

  it("should multiply the value", () => {
    expect(Money.dollar(5).times(2).equals(Money.dollar(10))).toBe(true);
    expect(Money.dollar(5).times(3).equals(Money.dollar(15))).toBe(true);
  });
});

describe("For CHF", () => {
  it("should multiply the value", () => {
    expect(Money.franc(5).times(2).equals(Money.franc(10))).toBe(true);
    expect(Money.franc(5).times(3).equals(Money.franc(15))).toBe(true);
  });
});
