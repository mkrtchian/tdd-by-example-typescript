import { Dollar, Franc } from "./money";

describe("For dollars", () => {
  it("should ensure equality", () => {
    expect(new Dollar(1).equals(new Dollar(1))).toBe(true);
    expect(new Dollar(1).equals(new Dollar(2))).toBe(false);
  });

  it("should multiply the value", () => {
    expect(new Dollar(5).times(2).equals(new Dollar(10))).toBe(true);
    expect(new Dollar(5).times(3).equals(new Dollar(15))).toBe(true);
  });
});

describe("For CHF", () => {
  it("should multiply the value", () => {
    expect(new Franc(5).times(2).equals(new Franc(10))).toBe(true);
    expect(new Franc(5).times(3).equals(new Franc(15))).toBe(true);
  });
});
