import type { CompareFn } from './types';

export function insertionSort<T>(arr: T[], compareFn: CompareFn<T>): T[] {
  const sortedArray = [...arr];

  for (let i = 1; i < sortedArray.length; i++) {
    const current = sortedArray[i];
    let j = i - 1;

    while (j >= 0 && compareFn(sortedArray[j], current) > 0) {
      sortedArray[j + 1] = sortedArray[j];
      j--;
    }

    sortedArray[j + 1] = current;
  }

  return sortedArray;
}
