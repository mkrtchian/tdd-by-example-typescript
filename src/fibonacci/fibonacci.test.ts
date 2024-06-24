import { fib } from "./fibonacci";

it.each([
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
])("Fibonacci", (input, output) => {
  expect(fib(input)).toBe(output);
});
