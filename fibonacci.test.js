import { fibonacciIterative, fibonacciRecursive } from "./fibonacci";

describe("Fibonacci functions", () => {
  const numbers = [
    [0, 0],
    [1, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [5, 5],
    [8, 6],
    [13, 7],
    [21, 8],
    [34, 9],
    [55, 10],
    [89, 11],
    [144, 12],
    [233, 13],
    [377, 14],
    [610, 15],
    [987, 16],
    [1597, 17],
    [2584, 18],
    [4181, 19],
    [354224848179261915075n, 100],
  ];

  it("should return the fibonacci number for each sequence number [fib, seq] using iterative function.", () => {
    numbers.forEach((n) => expect(fibonacciIterative(n[1])).toBe(BigInt(n[0])));
  });

  it("should return the fibonacci number for each sequence number [fib, seq] using recursive function.", () => {
    numbers.forEach((n) =>
      expect(fibonacciRecursive(n[1], {})).toBe(BigInt(n[0]))
    );
  });
});
