import { CompareFn } from "./types";

export function quickSort<T>(arr: T[], compareFn: CompareFn<T>): T[] {
  const sortedArray = arr.slice();
  sortHelper(sortedArray, 0, sortedArray.length - 1, compareFn);

  return sortedArray;
}

function sortHelper<T>(
  arr: T[],
  start: number,
  end: number,
  compareFn: CompareFn<T>
): void {
  if (start < end) {
    const partitionIndex = partition(arr, start, end, compareFn);
    sortHelper(arr, start, partitionIndex - 1, compareFn);
    sortHelper(arr, partitionIndex + 1, end, compareFn);
  }
}

function partition<T>(
  arr: T[],
  start: number,
  end: number,
  compareFn: CompareFn<T>
): number {
  const pivot = arr[end];
  let partitionIndex = start;

  for (let i = start; i < end; i++) {
    if (compareFn(arr[i], pivot) < 0) {
      [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
      partitionIndex++;
    }
  }

  [arr[partitionIndex], arr[end]] = [arr[end], arr[partitionIndex]];

  return partitionIndex;
}
