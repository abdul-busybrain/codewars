/**
 * NOTE: KATA
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

NOTE: TOPIC
Fundamentals
 */

function findOdd(arr) {
  return arr.reduce((a, b) => a ^ b);
}

// Test cases
console.log(findOdd([7])); // Expected: 7
console.log(findOdd([0])); // Expected: 0
console.log(findOdd([1, 1, 2])); // Expected: 2
console.log(findOdd([0, 1, 0, 1, 0])); // Expected: 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Expected: 4

// Additional test cases
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // Expected: 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // Expected: -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // Expected: 5
console.log(findOdd([10])); // Expected: 10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // Expected: 10
