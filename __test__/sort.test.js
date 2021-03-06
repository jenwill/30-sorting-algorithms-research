'use strict';

import bubbleSort from '../src/bubble-sort';
import insertionSort from '../src/insertion-sort';
import selectionSort from '../src/selection-sort';

const array1 = [3, 4, 1, 9, 3, 5, 500, 345, 1, 230];
const array2 = [-6, -3, -800, -2100, -23, -14, -34];
const array3 = [6, 3, 800, 2100, 23, 0, -14, -34];
const array4 = [0];
const emptyArray = [];
const mixedArray = ['string!', 30, 1, 15, 'another string', 40, -2, 'foo', false, 7];
const aString = 'Hello';

describe('Bubble sort', () => {
  test('Should correctly sort array of positive numbers', () => {
    expect(bubbleSort(array1)).toEqual([1, 1, 3, 3, 4, 5, 9, 230, 345, 500]);
  });
  test('Should correctly sort array of negative numbers', () => {
    expect(bubbleSort(array2)).toEqual([-2100, -800, -34, -23, -14, -6, -3]);
  });
  test('Should correctly sort array of positive and negative numbers', () => {
    expect(bubbleSort(array3)).toEqual([-34, -14, 0, 3, 6, 23, 800, 2100]);
  });
  test('Should correctly sort single value or empty array', () => {
    expect(bubbleSort(array4)).toEqual([0]);
    expect(bubbleSort(emptyArray)).toEqual([]);
  });
  test('Invalid inputs', () => {
    expect(bubbleSort(mixedArray)).toEqual(['string!', 1, 15, 30, 'another string', -2, 40, 'foo', false, 7]);
    expect(bubbleSort(aString)).toEqual(aString);
  });
});

describe('Insertion sort', () => {
  test('Should correctly sort array of positive numbers', () => {
    expect(insertionSort(array1)).toEqual([1, 1, 3, 3, 4, 5, 9, 230, 345, 500]);
  });
  test('Should correctly sort array of negative numbers', () => {
    expect(insertionSort(array2)).toEqual([-2100, -800, -34, -23, -14, -6, -3]);
  });
  test('Should correctly sort array of positive and negative numbers', () => {
    expect(insertionSort(array3)).toEqual([-34, -14, 0, 3, 6, 23, 800, 2100]);
  });
  test('Should correctly sort single value or empty array', () => {
    expect(insertionSort(array4)).toEqual([0]);
    expect(insertionSort(emptyArray)).toEqual([]);
  });
  test('Invalid inputs', () => {
    expect(insertionSort(mixedArray)).toEqual(['string!', 1, 15, 30, 'another string', -2, 40, 'foo', false, 7]);
    expect(insertionSort(aString)).toEqual(aString);
  });
});

describe('Selection sort', () => {
  test('Should correctly sort array of positive numbers', () => {
    expect(selectionSort(array1)).toEqual([1, 1, 3, 3, 4, 5, 9, 230, 345, 500]);
  });
  test('Should correctly sort array of negative numbers', () => {
    expect(selectionSort(array2)).toEqual([-2100, -800, -34, -23, -14, -6, -3]);
  });
  test('Should correctly sort array of positive and negative numbers', () => {
    expect(selectionSort(array3)).toEqual([-34, -14, 0, 3, 6, 23, 800, 2100]);
  });
  test('Should correctly sort single value or empty array', () => {
    expect(selectionSort(array4)).toEqual([0]);
    expect(selectionSort(emptyArray)).toEqual([]);
  });
  test('Invalid inputs', () => {
    expect(selectionSort(mixedArray)).toEqual(['another string', -2, false, 1, 'foo', 7, 15, 'string!', 30, 40]);
    expect(selectionSort(aString)).toEqual(aString);
  });
});

