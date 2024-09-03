/**
 * 
 * Kata: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
 */

/**
 * Documentation:  Rearrange the digits of a non-negative integer in descending order.
 *
 * @param {number} n - A non negative integer
 * @returns {number} - The integer with its digits sorted in descending order.
 */
function descendingOrder(n) {
  // Convert the number to a string to separate digits
  const digitsStr = n.toString();

  // Split the string into an array of individual digits
  const digitsArray = digitsStr.split("");

  // Sort the digits array of digits in descending order
  digitsArray.sort((a, b) => b - a);

  // Join the sorted digits back into a single string
  const sortedDigitsStr = digitsArray.join("");

  return parseInt(sortedDigitsStr, 10);
}

console.log(descendingOrder(42145)); // Output: 54421
console.log(descendingOrder(145263)); // Output: 654321
console.log(descendingOrder(123456789)); // Output: 987654321
