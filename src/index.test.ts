import { fib } from ".";

it("Fibonacci", () => {
  expect(fib(0)).toBe(0);
  expect(fib(1)).toBe(1);
});
