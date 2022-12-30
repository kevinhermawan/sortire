import type { CompareFn } from './types';

export function quickSort<T>(arr: T[], compareFn: CompareFn<T>): T[] {
  const sortedArray = [...arr];

  sort(sortedArray, 0, sortedArray.length - 1, compareFn);

  return sortedArray;
}

function sort<T>(
  arr: T[],
  left: number,
  right: number,
  compareFn: CompareFn<T>
): void {
  if (left >= right) return;

  const pivotIndex = partition(arr, left, right, compareFn);
  sort(arr, left, pivotIndex, compareFn);
  sort(arr, pivotIndex + 1, right, compareFn);
}

function partition<T>(
  arr: T[],
  left: number,
  right: number,
  compareFn: CompareFn<T>
): number {
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left - 1;
  let j = right + 1;

  while (i < j) {
    do {
      i++;
    } while (compareFn(arr[i], pivot) < 0);

    do {
      j--;
    } while (compareFn(arr[j], pivot) > 0);

    if (i >= j) return j;

    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return j;
}
