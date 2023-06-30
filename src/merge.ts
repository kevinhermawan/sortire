import type { CompareFn } from "./types";

export function mergeSort<T>(arr: T[], compareFn: CompareFn<T>): T[] {
  return mergeSortHelper(arr, compareFn, 0, arr.length - 1);
}

function mergeSortHelper<T>(
  arr: T[],
  compareFn: CompareFn<T>,
  start: number,
  end: number
): T[] {
  if (start >= end) {
    return [arr[start]];
  }

  const mid = Math.floor((start + end) / 2);
  const left = mergeSortHelper(arr, compareFn, start, mid);
  const right = mergeSortHelper(arr, compareFn, mid + 1, end);

  return merge(left, right, compareFn);
}

function merge<T>(left: T[], right: T[], compareFn: CompareFn<T>): T[] {
  const result: T[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (compareFn(left[i], right[j]) <= 0) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}
