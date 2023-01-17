import type { CompareFn } from "./types";

export function bubbleSort<T>(arr: T[], compareFn: CompareFn<T>): T[] {
  const sortedArray = arr.slice();

  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < sortedArray.length - 1; i++) {
      if (compareFn(sortedArray[i], sortedArray[i + 1]) > 0) {
        const temp = sortedArray[i];
        sortedArray[i] = sortedArray[i + 1];
        sortedArray[i + 1] = temp;

        sorted = false;
      }
    }
  }

  return sortedArray;
}
