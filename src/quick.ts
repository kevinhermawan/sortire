import { CompareFn } from './types';

export function quickSort<T>(arr: T[], compareFn: CompareFn<T>): T[] {
  const sortedArray = [...arr];

  if (sortedArray.length <= 1) return sortedArray;

  const pivotIndex = sortedArray.length - 1;
  const pivot = sortedArray[pivotIndex];
  let partitionIndex = 0;

  for (let i = 0; i < pivotIndex; i++) {
    const element = sortedArray[i];
    if (compareFn(element, pivot) < 0) {
      const temp = sortedArray[i];
      sortedArray[i] = sortedArray[partitionIndex];
      sortedArray[partitionIndex] = temp;

      partitionIndex++;
    }
  }

  const temp = sortedArray[pivotIndex];
  sortedArray[pivotIndex] = sortedArray[partitionIndex];
  sortedArray[partitionIndex] = temp;

  const left = sortedArray.slice(0, partitionIndex);
  const right = sortedArray.slice(partitionIndex + 1);

  return [...quickSort(left, compareFn), pivot, ...quickSort(right, compareFn)];
}
