/**
 * 
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
 */

/**
 * Function to find the sum of two lowest positive numbers in an array
 *
 * @param {number[]} numbers - An array of at least 4 positive integers
 * @returns {number} The sum of the two smallest numbers in the array.
 */
function sumTwoSmallestNumbers(numbers) {
  //Code here

  // Sort the array in ascending order.
  //   The first two elements in the sorted array will be the smallest numbers
  numbers.sort((a, b) => a - b);

  //   Sum the first two elements in the sorted array
  return numbers[0] + numbers[1];
}
