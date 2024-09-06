/**
 * Kata {
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
Hint: Don't forget to check for bad values like null/undefined

For example: [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
}
 */

/**
 *
 * @param {Array} sheep - An array containing boolean values where `true` means a sheep is present
 * @returns {number} - The total count of sheep that are present (i.e., `true`)
 */

function countSheeps(sheep) {
  // Filter the array to keep only the `true` values (indicating present sheep)
  //   Then return the length of the filtered array, which gives the number of present sheep.
  return sheep.filter((sheep) => sheep === true).length;
}
