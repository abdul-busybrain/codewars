/** NOTE: KATA
 * We want to generate all the numbers of three digits where:

the sum of their digits is equal to 10
their digits are in increasing order (the numbers may have two or more equal contiguous digits)
The numbers that fulfill these constraints are: [118, 127, 136, 145, 226, 235, 244, 334]. There're 8 numbers in total with 118 being the lowest and 334 being the greatest.

Task
Implement a javascript function which receives two arguments:

the sum of digits (sum)
the number of digits (count)
This function should return three values:

the total number of values which have count digits that add up to sum and are in increasing order
the lowest such value
the greatest such value
Note: if there're no values which satisfy these constaints, you should return an empty value (refer to the examples to see what exactly is expected).

Examples
findAll(10, 3)  =>  [8, "118", "334"]
findAll(27, 3)  =>  [1, "999", "999"]
findAll(84, 4)  =>  []
Features of the random tests:

Number of tests: 112
Sum of digits value between 20 and 65
Amount of digits between 2 and 17
NOTE Topic: Fundamentals, Data Structures, Algorithms, Mathematics, Logic. 
 */

/**
 * NOTE: JSDoc Finds all combinations of unique digits that sum to a target value
 * @param {number} sum - The target sum to find
 * @param {number} count - The number of digits in each combination
 * @returns {Array} An array containing:
 * - Number of valid combinations
 * - The smallest combination (lexicographically)
 * - The largest combination (lexicographically)
 */
function findAll(sum, count) {
  // Helper function to recursively generate valid digit combinations
  function generateCombinations(currentSum, currentCount, start, combination) {
    // Base case 1: We've used exactly 'count' digits
    // Check if the current sum matches the target sum
    if (currentCount === count) {
      // If sum matches, return this combination
      if (currentSum === sum) {
        return [combination];
      }
      // If sum doesn't match, return empty array
      return [];
    }

    // Early termination conditions
    // Stop if we've exceeded the target sum or digit count
    if (currentSum > sum || currentCount > count) {
      return [];
    }

    // Array to store all valid combinations found
    let results = [];

    // Try adding each unique digit from 'start' to 9
    // This ensures we don't repeat combinations and maintain acending order
    for (let i = start; i <= 9; i++) {
      // Recursive call to generate combinations
      // - Add current digit to sum
      // - Increment digit count
      // - Start next iteration from current digit to ensure uniqueness
      // - Append current digit to combination ustring
      results = results.concat(
        generateCombinations(
          currentSum + i,
          currentCount + 1,
          i,
          combination + i
        )
      );
    }

    // Return all valid combinations found
    return results;
  }

  //   Generate all valid combinations starting from empty set
  const validCombinations = generateCombinations(0, 0, 1, "");

  // If no valid combinations found, return empty array
  if (validCombinations.length === 0) {
    return [];
  }

  // Sort combinations lexicographically (as strings)
  validCombinations.sort((a, b) => a - b);

  // Return result array with:
  // 1. Number of valid combinations
  // 2. Smallest combination
  // 3. Largest combination
  return [
    validCombinations.length,
    validCombinations[0],
    validCombinations[validCombinations.length - 1],
  ];
}

// Test cases demonstrating different scenarios
console.log(findAll(10, 3));
console.log(findAll(27, 3));
console.log(findAll(84, 4));
console.log(findAll(9, 5));
