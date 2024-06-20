export function fib(n: number): number {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fib(n - 1) + 1;
}
