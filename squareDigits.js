/**
 * NOTE: KATA
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9square is 81 and 1square is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 7square is 49, 6square is 36, and 5square is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

NOTE: TOPICS
Mathematics, Fundamentals
 */

/**
 * NOTE: JSDoc
 * Squares each digit of a given number and concatenates the squared digits.
 *
 * @param {number} num - The input number whose digits will be squared
 * @returns {number} A new number where each digit is squared and concatenated
 */
function squareDigits(num) {
  // Step 1: Convert the number to a string
  // This allows us to easily split and manipulate individual digits
  const numStr = num.toString();

  // Step 2: Split the string into an array of individual character digits
  // This breaks the number into separate digits that can be processed
  const digits = numStr.split("");

  // Step 3: Square each digit
  // Use map to transform each digit by squaring it
  const squaredDigits = digits.map((digit) => {
    // Convert the digit character to a number and square it
    // Math.pow() is used to square the parsed integer value of the digit
    const squaredValue = Math.pow(parseInt(digit), 2);

    // Convert the squared value back to a string
    // This ensures we can concatenate the results later
    return squaredValue.toString();
  });

  // Step 4: Join the squared digits back into a single string
  // This concatenates all the squared digits in order
  const result = squaredDigits.join("");

  // Step 5: Convert the result back to an integer and return
  // parseInt converts the string of concatenated squared digits to a number
  return parseInt(result);
}

// Test cases to verify the function works correctly
console.log(squareDigits(9119)); // 811181
console.log(squareDigits(765)); // 493625
console.log(squareDigits(0)); // 0
console.log(squareDigits(1234)); // 14916
