import type { CompareFn } from "./types";

export function bubbleSort<T>(arr: T[], compareFn: CompareFn<T>): T[] {
  const sortedArray = arr.slice();
  const n = sortedArray.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (compareFn(sortedArray[j], sortedArray[j + 1]) > 0) {
        [sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ];

        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return sortedArray;
}
