/**
 * implement merge sort algorithm by using recursion
 *
 * @param {number[]} array of numbers
 * @returns {number[]} sorted array
 */
export function mergeSort(numbers) {
  if (numbers.length <= 1) return numbers;
  const mid = ~~(numbers.length / 2),
    left = mergeSort(numbers.slice(0, mid)),
    right = mergeSort(numbers.slice(mid, numbers.length)),
    result = [];

  while (left[0] !== undefined && right[0] !== undefined) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  while (left[0] !== undefined) {
    result.push(left.shift());
  }

  while (right[0] !== undefined) {
    result.push(right.shift());
  }

  return result;
}
