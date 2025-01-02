/**
 * NOTE Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2] If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

/**
 * NOTE JSDoc: Computes the difference between two arrays
 *
 * @param {Array} a - The array to be filtered
 * @param {Array} b - The array containing elements to be removed from 'a'
 * @returns {Array} A new array with elements from 'a' that are not present in 'b'
 *
 * @example
 * arrayDiff([1, 2, 2, 2, 3], [2]) returns [1, 3]
 * arrayDiff([1, 2, 3], [1, 2]) returns [3]
 *
 * @description
 * This function removes all values from array 'a' which are present in array 'b'
 * It maintains the order of elements in the resulting array.
 *
 * Time complexity: 0(n + m), where n is the length of 'a' and m is the length of 'b'
 * Space Complexity: 0(m) for the Set, plus 0(n) in the worst case for the output array.
 */

function arrayDiff(a, b) {
  // Create a set from array 'b' for effient lookup (0(m) time and space)
  const setB = new Set(b);

  // Filter array 'a', keeping only elements not present in setB (0(n) time). This creates a new array, preserving the original order of elements in 'a'
  return a.filter((x) => !setB.has(x));
}

// Test cases
console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1, 3]
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
console.log(arrayDiff([1, 2, 3], [])); // [1, 2, 3]
console.log(arrayDiff([], [1, 2])); // []
console.log(arrayDiff([1, 2, 3], [4])); // [1, 2, 3]

// Edge case: Large arrays
const largeA = Array.from({ length: 100000 }, (_, index) => index);
const largeB = Array.from({ length: 500000 }, (_, index) => index * 2);
console.time("Large array diff");
arrayDiff(largeA, largeB);
console.timeEnd("Large array diff");
