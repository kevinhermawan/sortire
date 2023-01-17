import type { CompareFn } from "./types";

export function heapSort<T>(arr: T[], compareFn: CompareFn<T>): T[] {
  const sortedArray = arr.slice();

  buildHeap(sortedArray, compareFn);

  for (let i = sortedArray.length - 1; i >= 0; i--) {
    const temp = sortedArray[0];
    sortedArray[0] = sortedArray[i];
    sortedArray[i] = temp;

    heapify(sortedArray, 0, i, compareFn);
  }

  return sortedArray;
}

function buildHeap<T>(arr: T[], compareFn: CompareFn<T>) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length, compareFn);
  }
}

function heapify<T>(
  arr: T[],
  i: number,
  size: number,
  compareFn: CompareFn<T>,
) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  if (left < size && compareFn(arr[largest], arr[left]) < 0) {
    largest = left;
  }

  if (right < size && compareFn(arr[largest], arr[right]) < 0) {
    largest = right;
  }

  if (largest !== i) {
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    heapify(arr, largest, size, compareFn);
  }
}
