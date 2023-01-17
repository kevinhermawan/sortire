import { CompareFn } from "./types";

export function selectionSort<T>(arr: T[], compareFn: CompareFn<T>): T[] {
  const sortedArray = arr.slice();

  for (let i = 0; i < sortedArray.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < sortedArray.length; j++) {
      if (compareFn(sortedArray[j], sortedArray[minIndex]) < 0) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = sortedArray[i];
      sortedArray[i] = sortedArray[minIndex];
      sortedArray[minIndex] = temp;
    }
  }

  return sortedArray;
}
