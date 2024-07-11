import { fibonacci } from "./fibonacci";

it.each([
  [0, 0],
  [1, 1],
])("return the fibonacci number", (input, expected) => {
  expect(fibonacci(input)).toBe(expected);
});
