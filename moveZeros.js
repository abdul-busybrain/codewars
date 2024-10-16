/**
 * NOTE: KATA
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 */

/**
 *  Moves all zeros to the end  of an array while preserving the order of non-zero elements
 *
 * @param {Array} arr - The input array
 * @returns {Array} The array with zeros moved to the end
 */

function moveZeros(arr) {
  // Create an empty array to store non-zero elements
  const nonZeroElements = [];

  //   Count the number of zeros in the array
  const zeroCount = arr.filter((el) => el === 0).length;

  // Iterate through the array and push non-zero elements to the `nonZeroElements` array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      nonZeroElements.push(arr[i]);
    }
  }

  // Concatenate the non-zero elemnets with an array of zeros to create the final result
  return [...nonZeroElements, ...Array(zeroCount).fill(0)];
}

console.log(moveZeros([2, 3, 4, 50, 0, 0, 0, 3, 4, 5, 60, 56, 0]));
