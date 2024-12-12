/**
 * Find an index where the sum of elements to the left equals the sum of elements to the right.
 *
 * This function solves the "Equal Sides of an Array" problem, identifying a point in the array
 * where the sum of elements preceding the index is equal to the sum of elements following it.
 *
 * @param {number[]} arr - The input array of integers
 * @returns {number} The first index where left and right sums are equal, or -1 if no such index exists
 *
 * Time Complexity: O(n) - We make two passes through the array
 * Space Complexity: O(1) - We use a constant amount of extra space
 */
function findEvenIndex(arr) {
  // First, calculate the total sum of all elements in the array
  // Using reduce() to efficiently sum all array elements
  const totalSum = arr.reduce((sum, num) => sum + num, 0);

  // Initialize left sum to 0 - we'll track the sum of elements to the left of current index
  let leftSum = 0;

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Calculate right sum by subtracting left sum and current element from total sum
    // This gives us the sum of all elements to the right of the current index
    const rightSum = totalSum - leftSum - arr[i];

    // Check if left sum exactly matches right sum
    // If they're equal, we've found our "balanced" index
    if (leftSum === rightSum) {
      return i; // Return the current index
    }

    // Update left sum by adding current element
    // This prepares for the next iteration
    leftSum += arr[i];
  }

  // If we've gone through entire array without finding a balanced index
  return -1;
}

// Comprehensive test cases to verify different scenarios
const testCases = [
  [1, 2, 3, 4, 3, 2, 1], // Balanced index in middle
  [1, 100, 50, -51, 1, 1], // Balanced index with larger numbers
  [20, 10, -80, 10, 10, 15, 35], // Balanced index at start
  [1, 2, 3, 4, 5, 6], // No balanced index
  [-1, -2, -3, -4, -3, -2, -1], // Balanced index with negative numbers
  [0, 0, 0, 0, 0], // All zeros
];

// Run and display test results
testCases.forEach((testCase, index) => {
  const result = findEvenIndex(testCase);
  console.log(`Test Case ${index + 1}: [${testCase}]`);
  console.log(`Result: ${result}\n`);
});
