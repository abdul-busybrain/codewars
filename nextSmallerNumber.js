/**
 * NOTE: KATA
 * Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."

NOTE: TOPIC StringsMathematicsAlgorithms
 */

/**
 * NOTE: JSDoc Finds the next smaller number with the same number of digits by rearranging the digits.
 * @param {*} n - The input number to find the next smaller permutation
 * @returns {number} The next smaller number or -1 if no such number exists
 */
function nextSmaller(n) {
  // Step 1: Convert the number to an array of digits for manipulation
  // This allows us to work with individual digits easily
  let digits = String(n).split("").map(Number);

  // Step 2: Find the pivot point - the first pair of adjacent digits from right to left, where the left digit is larger than the right digit
  // Start from the rightmost digit. Keep moving left as long as the digits are in non-decreasing order. Stop when you find a position where the left digit is larger than the right digit.
  // This identifies where we can potentially swap to create a smaller number
  let i = digits.length - 1;
  while (i > 0 && digits[i - 1] <= digits[i]) {
    i--;
  }

  // Step 3: If no such pair is found, it means the digits are in ascending order
  // So no smaller number can be formed
  if (i === 0) return -1;

  // Step 4: Find the largest digit to the right of the pivot that is smaller than the pivot digit
  // Start from the rightmost digit. Keep moving left until you find a digit smaller than the pivot digit. This will be the digit we swap with.
  // This ensures we swap with the most appropriate digit to minimize the number
  let j = digits.length - 1;
  while (digits[j] >= digits[i - 1]) {
    j--;
  }

  // Step 5: Swap the pivot digit with the found smaller digit
  // This is the key step in generating the next smaller number
  [digits[i - 1], digits[j]] = [digits[j], digits[i - 1]];

  // Step 6: Sort the digits to the right of the swapped position in descending order
  // This ensures we get the largest possible smaller number
  let right = digits.slice(i).sort((a, b) => b - a);
  digits = [...digits.slice(0, i), ...right];

  // Step 7: Convert the digit array back to a number
  let result = parseInt(digits.join(""));

  // Step 8: Final validation
  // Ensure the result is actually smaller and has the same number of digits
  return result < n && String(result).length === String(n).length ? result : -1;
}
console.log(nextSmaller(12));
console.log(nextSmaller(531));

// Comprehensive Test Suite
const testCases = [
  { input: 21, expected: 12 },
  { input: 531, expected: 513 },
  { input: 2071, expected: 2017 },
  { input: 9, expected: -1 },
  { input: 111, expected: -1 },
  { input: 135, expected: -1 },
  { input: 1027, expected: -1 },
  { input: 1234567908, expected: 1234567890 },
];

// Run and validate test cases
testCases.forEach(({ input, expected }) => {
  const result = nextSmaller(input);
  console.log(
    `Input: ${input}, Expected: ${expected}, Result: ${result}, ${
      result === expected ? "✅ PASS" : "❌ FAIL"
    }`
  );
});
