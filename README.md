# Sortire ![License](https://img.shields.io/npm/l/sortire) ![Test coverage](https://img.shields.io/codecov/c/github/kevinhermawan/sortire)

Sortire is a library that provides a variety of sorting algorithms for use in JavaScript. It includes implementations of popular algorithms such as bubble sort, insertion sort, selection sort, heap sort, merge sort, and quick sort. These algorithms can be customized with a comparison function to specify the order of the elements in the array. All of the functions in Sortire return a shallow copy of the modified array.

## Installation

```
npm i sortire
```

## Small Range Arrays

For small range arrays, bubble sort, insertion sort, and selection sort are all excellent options. These algorithms have a time complexity of `O(n^2)`, which means that the time it takes to sort the array increases at a faster rate as the size of the array increases. While they may not be as efficient as `O(n log n)` algorithms for large arrays, they are still very effective for sorting small arrays, as the sorting time will be relatively quick even for very small input sizes.

### Bubble sort

Bubble sort is a simple sorting algorithm that works by repeatedly iterating through the array and swapping adjacent elements if they are in the wrong order.

```ts
import { bubbleSort } from 'sortire';

const array = [5, 3, 8, 4, 9, 1, 6, 2, 7];

// Sort in ascending order
const sortedAsc = bubbleSort(array, (a, b) => a - b);
console.log(sortedAsc); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Sort in descending order
const sortedDesc = bubbleSort(array, (a, b) => b - a);
console.log(sortedDesc); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
```

> **Time complexity:**
>
> O(n^2), where n is the length of the array.

### Insertion sort

Insertion sort works by repeatedly inserting the next element in the correct position in the sorted portion of the array.

```ts
import { insertionSort } from 'sortire';

const array = [5, 3, 8, 4, 9, 1, 6, 2, 7];

// Sort in ascending order
const sortedAsc = insertionSort(array, (a, b) => a - b);
console.log(sortedAsc); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Sort in descending order
const sortedDesc = insertionSort(array, (a, b) => b - a);
console.log(sortedDesc); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
```

> **Time complexity:**
>
> O(n^2), where n is the length of the array.

### Selection sort

Selection sort works by repeatedly selecting the smallest element in the unsorted portion of the array and swapping it with the first element in the unsorted portion.

```ts
import { selectionSort } from 'sortire';

const array = [5, 3, 8, 4, 9, 1, 6, 2, 7];

// Sort in ascending order
const sortedAsc = selectionSort(array, (a, b) => a - b);
console.log(sortedAsc); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Sort in descending order
const sortedDesc = selectionSort(array, (a, b) => b - a);
console.log(sortedDesc); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
```

> **Time complexity:**
>
> O(n^2), where n is the length of the array.

## Large Range Arrays

For large range arrays, heap sort, merge sort, and quick sort are all good choices. These algorithms have a time complexity of `O(n log n)`, which means that the time it takes to sort the array increases at a slower rate as the size of the array increases. This makes them well-suited for sorting large arrays, as the sorting time will not become excessively long even for very large input sizes.

### Heap sort

Heap sort is a sorting algorithm that works by building a [heap data structure](<https://en.wikipedia.org/wiki/Heap_(data_structure)>) from the input array and repeatedly extracting the maximum element from the heap. It requires additional space for the heap data structure, which can make it less suitable for large arrays that do not fit in memory.

```ts
import { heapSort } from 'sortire';

const array = [5, 3, 8, 4, 9, 1, 6, 2, 7];

// Sort in ascending order
const sortedAsc = heapSort(array, (a, b) => a - b);
console.log(sortedAsc); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Sort in descending order
const sortedDesc = heapSort(array, (a, b) => b - a);
console.log(sortedDesc); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
```

> **Time complexity:**
>
> O(n log n), where n is the length of the array.

### Merge sort

Merge sort is a sorting algorithm that works by dividing the input array in half, sorting each half, and then merging the sorted halves back together.

```ts
import { mergeSort } from 'sortire';

const array = [5, 3, 8, 4, 9, 1, 6, 2, 7];

// Sort in ascending order
const sortedAsc = mergeSort(array, (a, b) => a - b);
console.log(sortedAsc); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Sort in descending order
const sortedDesc = mergeSort(array, (a, b) => b - a);
console.log(sortedDesc); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
```

> **Time complexity:**
>
> O(n log n), where n is the length of the array.

### Quick sort

Quick sort is a sorting algorithm that works by selecting a pivot element from the array and partitioning the array into two halves around the pivot. It can be less efficient for arrays with a large number of duplicate elements or for arrays that are already partially sorted.

```ts
import { quickSort } from 'sortire';

const array = [5, 3, 8, 4, 9, 1, 6, 2, 7];

// Sort in ascending order
const sortedAsc = quickSort(array, (a, b) => a - b);
console.log(sortedAsc); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Sort in descending order
const sortedDesc = quickSort(array, (a, b) => b - a);
console.log(sortedDesc); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
```

> **Time complexity:**
>
> O(n log n), where n is the length of the array.
