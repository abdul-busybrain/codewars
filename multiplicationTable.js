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
