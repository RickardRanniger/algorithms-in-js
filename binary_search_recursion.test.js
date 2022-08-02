/**
 * @file Test Implementation of binary search in JS using recursion.
 * @requires {@link module:./binary_search_recursion}
 * @author Rickard Ranniger
 */

import { binarySearch } from "./binary_search_recursion";

describe('Test binarySearch function', () => {
    const set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    it('Test if "1" can be found', () => expect(binarySearch(set, 3, 0, set.length - 1)).toBeTruthy());
    it('Test if "5" can be found', () => expect(binarySearch(set, 5, 0, set.length - 1)).toBeTruthy());
    it('Test if "10" can be found', () => expect(binarySearch(set, 10, 0, set.length - 1)).toBeTruthy());
    it('Test that "11" return false', () => expect(binarySearch(set, 11, 0, set.length - 1)).toBeFalsy());
});
