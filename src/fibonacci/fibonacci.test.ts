import { fibonacci } from "./fibonacci";

it.each([
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
])("return the fibonacci number for %i", (input, expected) => {
  expect(fibonacci(input)).toBe(expected);
});
