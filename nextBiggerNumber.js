/**
 * NOTE: KATA
 * Create a javascript function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.
 */

function nextBigger(n) {
  // Convert the numbers to an array of digits for easier manipulation
  const digits = Array.from(String(n), Number);

  // Find the first pair of adjacent digits (from right to lest) where the left digit is smaller than the right digit.
  // This identifies the point where we can make a change to get a bigger number
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  // If no such pair is found, the digits are in descending order, so no bigger number can be formed
  if (i === -1) return -1;

  // Find the smallest digit on the right side of (i) that is greater than digits[i]
  // This digit will be swapped with digits[i] to create the next bigger number
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  // Swap the 2 identified digits
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Sort the subarray to the right of (i) in ascending order
  // This ensures we get the smallest possible bigger number
  const sortedSubarray = digits.slice(i + 1).sort((a, b) => a - b);

  //   Combine the left part (up to index i) with the sorted right part and convert back to a number
  const result = parseInt(
    digits
      .slice(0, i + 1)
      .concat(sortedSubarray)
      .join(""),
    10
  );

  return result;
}

// Use case
console.log(nextBigger(2017)); //2071
console.log(nextBigger(531));
