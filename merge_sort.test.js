import { mergeSort } from "./merge_sort";

describe("Test mergeSort", () => {
  it("should return sorted array", () => {
    expect(mergeSort([9, 1, 8, 2, 7, 3, 6, 4, 5, 0])).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
    expect(mergeSort([98, 55, 12, 1000, 333, 444, 444, 66, 7])).toStrictEqual([
      7, 12, 55, 66, 98, 333, 444, 444, 1000,
    ]);
  });
});
