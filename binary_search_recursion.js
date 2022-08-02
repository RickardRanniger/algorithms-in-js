/**
 * @file Implementation of binary search in JS using recursion.
 * @author Rickard Ranniger
 */

/**
 * Search recursively for target from a sorted array of numbers.
 * 
 * @param {number[]} items - An array of sorted numbers
 * @param {number} target - The search target 
 * @param {number} left - Index min
 * @param {number} right - Index max
 * @returns {boolean} - True if target was found
 */
export function binarySearch(items, target, left, right) {
    if (left > right) return false;
    const mid = Math.floor(left + ((right - left) / 2));
    if (target === items[mid]) return true;
    if (target < items[mid]) return binarySearch(items, target, left, mid - 1);
    if (target > items[mid]) return binarySearch(items, target, mid + 1, right);
}
