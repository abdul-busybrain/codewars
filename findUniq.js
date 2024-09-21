/**
 * Kata: Find Unique Number
 * NOTE There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
 */

// NOTE Documentation
/**
 * Find the number in an array where all other numbers are equal.
 *
 * @param {number[]} arr - The input array containing at least 3 numbers
 * @returns {number} The unique number in the array
 *
 * @throws {Error} If the input is not an array or contains fewer than 3 elements
 *
 * #
 * @example
 * findUniq([1, 1, 1, 2, 1, 1]) returns 2
 * findUniq([0, 0, 0.55, 0, 0]) returns 0.55
 *
 * @description
 * This function uses a sorting approach to find the unique number.
 * Time Complexity: 0(n log n) due to sorting
 * Space Complexity: 0(1) or 0(n) depending on the sorting algorith used by the runtime
 */

function findUniq(arr) {
  // Input validation
  if (!Array.isArray(arr) || arr.length < 3) {
    throw new Error("Input must be an array with at least 3 elements");
  }

  // Sort the array in ascending order
  // This puts the unique element either at the beginning or at the end
  arr.sort((a, b) => a - b);
  console.log(arr);

  // Check if the first element is unique
  //   If it's different from the second element, must be the unique one
  if (arr[0] !== arr[1]) {
    return arr[0];
  }

  //   If the first element is not unique, the last element must be, that is because we know there's exactly one unique element, and if it's not at the start, it must be at the end after sorting
  return arr[arr.length - 1];
}

// Test cases
console.log(findUniq([1, 1, 1, 1, 2, 1, 1, 1])); // Output: 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // Output: 0.55
console.log(findUniq([3, 10, 3, 3, 3])); // Output: 10

// Edge case: minimum array length
console.log(findUniq(1, 1, 2)); // Output: 2

try {
  findUniq([1, 2]);
} catch (error) {
  console.log(error.message); // Output: Input must be an array with at least 3 elements
}
