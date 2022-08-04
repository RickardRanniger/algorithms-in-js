/**
 * Get fibonacci for sequence number (n) with iteration
 *
 * @param {number} n
 * @returns {BigInt}
 */
export function fibonacciIterative(n) {
  let a = BigInt(1),
    b = BigInt(0),
    c = BigInt(0);
  for (let i = 0; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

/**
 * Get fibonacci for sequence number (n) with recursion
 *
 * @param {number} n
 * @param {{number:BigInt}} memo
 * @returns {BigInt}
 */
export function fibonacciRecursive(n, memo) {
  if (n in memo) return memo[n];
  if (n === 0) return BigInt(0);
  if (n === 1 || n === 2) return BigInt(1);
  memo[n] = BigInt(
    fibonacciRecursive(n - 1, memo) + fibonacciRecursive(n - 2, memo)
  );
  return memo[n];
}
