import type { CompareFn } from "./types";

export function mergeSort<T>(arr: T[], compareFn: CompareFn<T>): T[] {
  const sortedArray = arr.slice();

  if (sortedArray.length <= 1) return sortedArray;

  const mid = Math.floor(sortedArray.length / 2);
  const left = sortedArray.slice(0, mid);
  const right = sortedArray.slice(mid);

  return merge(
    mergeSort(left, compareFn),
    mergeSort(right, compareFn),
    compareFn,
  );
}

function merge<T>(left: T[], right: T[], compareFn: CompareFn<T>): T[] {
  const result: T[] = [];

  while (left.length > 0 && right.length > 0) {
    if (compareFn(left[0], right[0]) <= 0) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }

  return result.concat(left, right);
}
