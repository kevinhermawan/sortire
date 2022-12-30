import { describe, expect, it } from 'vitest';
import {
  bubbleSort,
  heapSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from '../src';

const unsortedArray = [5, 3, 8, 4, 9, 1, 6, 2, 7];
const expectedAsc = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const expectedDesc = [9, 8, 7, 6, 5, 4, 3, 2, 1];

describe('index.ts', () => {
  it('bubbleSort', () => {
    const resultAsc = bubbleSort(unsortedArray, (a, b) => a - b);
    const resultDesc = bubbleSort(unsortedArray, (a, b) => b - a);

    expect(resultAsc).to.eql(expectedAsc);
    expect(resultDesc).to.eql(expectedDesc);
  });

  it('insertionSort', () => {
    const resultAsc = insertionSort(unsortedArray, (a, b) => a - b);
    const resultDesc = insertionSort(unsortedArray, (a, b) => b - a);

    expect(resultAsc).to.eql(expectedAsc);
    expect(resultDesc).to.eql(expectedDesc);
  });

  it('selectionSort', () => {
    const resultAsc = selectionSort(unsortedArray, (a, b) => a - b);
    const resultDesc = selectionSort(unsortedArray, (a, b) => b - a);

    expect(resultAsc).to.eql(expectedAsc);
    expect(resultDesc).to.eql(expectedDesc);
  });

  it('heapSort', () => {
    const resultAsc = heapSort(unsortedArray, (a, b) => a - b);
    const resultDesc = heapSort(unsortedArray, (a, b) => b - a);

    expect(resultAsc).to.eql(expectedAsc);
    expect(resultDesc).to.eql(expectedDesc);
  });

  it('mergeSort', () => {
    const resultAsc = mergeSort(unsortedArray, (a, b) => a - b);
    const resultDesc = mergeSort(unsortedArray, (a, b) => b - a);

    expect(resultAsc).to.eql(expectedAsc);
    expect(resultDesc).to.eql(expectedDesc);
  });

  it('quickSort', () => {
    const resultAsc = quickSort(unsortedArray, (a, b) => a - b);
    const resultDesc = quickSort(unsortedArray, (a, b) => b - a);

    expect(resultAsc).to.eql(expectedAsc);
    expect(resultDesc).to.eql(expectedDesc);
  });
});
