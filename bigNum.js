/**
 * NOTE: KATA
 * We need to sum big numbers and we require your help.

Write a javascript  function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example

add("123", "321"); -> "444"add("11", "99");   -> "110"

Notes

The input numbers are big.

The input is a string of only digits

The numbers are positives

NOTE: Topic Mathematics Big Integers Algorithms
 */

/**
 * @description - Adds two large numbers represented as strings
 *
 * @param {string} num1 - The first number as a string
 * @param {string} num2 - The second number as a string
 * @returns {string} The sum of the numbers as a string
 */

function bigNum(num1, num2) {
  // Initialize variables to score result, carryover, and current indices
  let result = "";
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  // Iterate through the numbers from right to left, adding corresponding digits and carrying over if necessary.
  while (i >= 0 || j >= 0 || carry > 0) {
    let sum =
      (i >= 0 ? parseInt(num1[i]) : 0) +
      (j >= 0 ? parseInt(num2[j]) : 0) +
      carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
    i--;
    j--;
  }

  // Return the final result as a string
  return result;
}
