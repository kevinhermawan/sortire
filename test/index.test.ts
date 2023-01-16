import { describe, expect, it } from "vitest";
import {
  bubbleSort,
  heapSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from "../src";

const unsortedArray = [5, 3, 8, 4, 9, 1, 6, 2, 7];
const expectedArrayAsc = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const expectedArrayDesc = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const unsortedArrayObj = [
  { id: 1, name: "Red" },
  { id: 2, name: "Green" },
  { id: 3, name: "Blue" },
  { id: 4, name: "Yellow" },
  { id: 5, name: "Purple" },
];

const expectedArrayObjAsc = [
  { id: 3, name: "Blue" },
  { id: 2, name: "Green" },
  { id: 5, name: "Purple" },
  { id: 1, name: "Red" },
  { id: 4, name: "Yellow" },
];

const expectedArrayObjDesc = [
  { id: 4, name: "Yellow" },
  { id: 1, name: "Red" },
  { id: 5, name: "Purple" },
  { id: 2, name: "Green" },
  { id: 3, name: "Blue" },
];

describe("index.ts", () => {
  it("bubbleSort", () => {
    const resultAsc = bubbleSort(unsortedArray, (a, b) => a - b);
    const resultDesc = bubbleSort(unsortedArray, (a, b) => b - a);
    const resultObjAsc = bubbleSort(unsortedArrayObj, (a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    const resultObjDesc = bubbleSort(unsortedArrayObj, (a, b) => {
      return a.name > b.name ? -1 : 1;
    });

    expect(resultAsc).to.eql(expectedArrayAsc);
    expect(resultDesc).to.eql(expectedArrayDesc);
    expect(resultObjAsc).to.eql(expectedArrayObjAsc);
    expect(resultObjDesc).to.eql(expectedArrayObjDesc);
  });

  it("insertionSort", () => {
    const resultAsc = insertionSort(unsortedArray, (a, b) => a - b);
    const resultDesc = insertionSort(unsortedArray, (a, b) => b - a);
    const resultObjAsc = insertionSort(unsortedArrayObj, (a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    const resultObjDesc = insertionSort(unsortedArrayObj, (a, b) => {
      return a.name > b.name ? -1 : 1;
    });

    expect(resultAsc).to.eql(expectedArrayAsc);
    expect(resultDesc).to.eql(expectedArrayDesc);
    expect(resultObjAsc).to.eql(expectedArrayObjAsc);
    expect(resultObjDesc).to.eql(expectedArrayObjDesc);
  });

  it("selectionSort", () => {
    const resultAsc = selectionSort(unsortedArray, (a, b) => a - b);
    const resultDesc = selectionSort(unsortedArray, (a, b) => b - a);
    const resultObjAsc = selectionSort(unsortedArrayObj, (a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    const resultObjDesc = selectionSort(unsortedArrayObj, (a, b) => {
      return a.name > b.name ? -1 : 1;
    });

    expect(resultAsc).to.eql(expectedArrayAsc);
    expect(resultDesc).to.eql(expectedArrayDesc);
    expect(resultObjAsc).to.eql(expectedArrayObjAsc);
    expect(resultObjDesc).to.eql(expectedArrayObjDesc);
  });

  it("heapSort", () => {
    const resultAsc = heapSort(unsortedArray, (a, b) => a - b);
    const resultDesc = heapSort(unsortedArray, (a, b) => b - a);
    const resultObjAsc = heapSort(unsortedArrayObj, (a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    const resultObjDesc = heapSort(unsortedArrayObj, (a, b) => {
      return a.name > b.name ? -1 : 1;
    });

    expect(resultAsc).to.eql(expectedArrayAsc);
    expect(resultDesc).to.eql(expectedArrayDesc);
    expect(resultObjAsc).to.eql(expectedArrayObjAsc);
    expect(resultObjDesc).to.eql(expectedArrayObjDesc);
  });

  it("mergeSort", () => {
    const resultAsc = mergeSort(unsortedArray, (a, b) => a - b);
    const resultDesc = mergeSort(unsortedArray, (a, b) => b - a);
    const resultObjAsc = mergeSort(unsortedArrayObj, (a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    const resultObjDesc = mergeSort(unsortedArrayObj, (a, b) => {
      return a.name > b.name ? -1 : 1;
    });

    expect(resultAsc).to.eql(expectedArrayAsc);
    expect(resultDesc).to.eql(expectedArrayDesc);
    expect(resultObjAsc).to.eql(expectedArrayObjAsc);
    expect(resultObjDesc).to.eql(expectedArrayObjDesc);
  });

  it("quickSort", () => {
    const resultAsc = quickSort(unsortedArray, (a, b) => a - b);
    const resultDesc = quickSort(unsortedArray, (a, b) => b - a);
    const resultObjAsc = quickSort(unsortedArrayObj, (a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    const resultObjDesc = quickSort(unsortedArrayObj, (a, b) => {
      return a.name > b.name ? -1 : 1;
    });

    expect(resultAsc).to.eql(expectedArrayAsc);
    expect(resultDesc).to.eql(expectedArrayDesc);
    expect(resultObjAsc).to.eql(expectedArrayObjAsc);
    expect(resultObjDesc).to.eql(expectedArrayObjDesc);
  });
});
