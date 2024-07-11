import { fibonacci } from "./fibonacci";

it("return the fibonacci number", () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
});
