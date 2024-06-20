import { fib } from ".";

it.each([
  [0, 0],
  [1, 1],
  [2, 1],
])("Fibonacci", (input, output) => {
  expect(fib(input)).toBe(output);
});
