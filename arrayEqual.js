/**
 * NOTE: KATA
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most languages the index of an array starts at 0.

Input
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note
If you are given an array with multiple answers, return the lowest correct index.

NOTE: TOPICS
Algorithms, Arrays, Fundamentals
 */

/**
 * Find an index where the sum of elements to the left equals the sum of elements to the right.
 *
 * This function solves the "Equal sides of an Array" problem, identifying a point in the array
 * where the sum of elements preceding the index is equal to the sum of elements following it.
 *
 * @param {number[]} arr - The input array of integers
 * @returns {number} The first index where left and right sums are equal, or -1 if no such index exists
 *
 * Time complexity: 0(n) - We make two passes through the array
 * Space complexity: 0(1) - We use a constant amount of extra space
 */
function findEvenIndex(arr) {
  // First calculate the total sum of all elements in the array
  //   Using reduce() to efficiently sum all array elements
  const totalSum = arr.reduce((sum, num) => sum + num, 0);

  // Initialize left sum to 0 - we'll track the sum of elements to the left of current index
  let leftSum = 0;

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Calculate the right sum by subtracting left sum and current element from total sum
    // This gives us the sum of all elements to the right of the current index
    const rightSum = totalSum - leftSum - arr[i];

    // Check if left sum exactly matches right sum
    // If the're equal, we've found our "balanced" index
    if (leftSum === rightSum) {
      return i; // Return the current index
    }

    // Update left sum by adding current element
    // This prepares for next iteration
    leftSum += arr[i];
  }

  // If we've gone through entire array without finding a balanced index
  return -1;
}

// Test cases
const testCases = [
  [1, 2, 3, 4, 3, 2, 1], // Balanced index in middle
  [1, 100, 50, -51, 1, 1], // Balanced index with larger numbers
  [20, 10, -80, 10, 10, 15, 35], // Balanced index at start
  [1, 2, 3, 4, 5, 6], // No balanced index
  [-1, -2, -3, -4, -3, -2, -1], // Balanced index
];

// Run and display test results
testCases.forEach((testCase, index) => {
  const result = findEvenIndex(testCase);
  console.log(`Test Case ${index + 1}: [${testCase}]`);
  console.log(`Result: ${result}\n`);
});
