/**
NOTE: KATA Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
ArraysFundamentals
*/

/**
 * NOTE: Documentation
 * Generates a NxN multiplication table.
 *
 * @param {number} size - The size of the multiplication table (N)
 * @returns {number[][]} A 2D array representing the multiplication table.
 * @throws {Error} If size is not a positive integer
 */

function multiplicationTable(size) {
  // Input validation
  if (!Number.isInteger(size) || size <= 0) {
    throw new Error("Size must be a positive integer");
  }

  // Generate the multiplication table using nested Array.from()
  return Array.from({ length: size }, (_, i) =>
    // Outer array: 'size' number of rows
    Array.from(
      { length: size },
      (_, j) =>
        // Inner array: each row with 'size' number pf columns
        (i + 1) * (j + 1) //Calculate the product for each cell
    )
  );
}

// Test cases
console.log("3x3 Table");
console.log(multiplicationTable(3));

console.log("\n5x5 Table");
console.log(multiplicationTable(5));

console.log("\n1x1 Table");
console.log(multiplicationTable(1));

// Edge cases: 0 should throw an error
try {
  console.log("\nTrying to create a 0x0 table:");
  multiplicationTable(0);
} catch (error) {
  console.log("Error caught:", error.message);
}

// Edge case: negative number should throw an error
try {
  console.log("\nTrying to create a -3x-3 table:");
} catch (error) {
  console.log("Error caught:", error.message);
}
