import { Dollar } from "./money";

it("should multiply the value", () => {
  const dollar5 = new Dollar(5);

  const dollar10 = dollar5.times(2);
  expect(dollar10.amount).toBe(10);

  const dollar15 = dollar5.times(3);
  expect(dollar15.amount).toBe(15);
});

it("should ensure equality", () => {
  expect(new Dollar(1).equals(new Dollar(1))).toBe(true);
  expect(new Dollar(1).equals(new Dollar(2))).toBe(false);
});
