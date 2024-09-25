/**
 * NOTE: KATA 
 * You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// Arrays Fundamentals
 */

/**
 * NOTE DOCUMENTATION
 * @param {string[]} walk - An array of directions ('n', 's', 'e', 'w')
 * @returns {boolean} True if the walk is valid, false otherwise
 */
function isValidWalk(walk) {
  // Early return if the walk is not exactly 10 minutes long
  if (walk.length !== 10) return false;

  // Initialize counters for vertical and horizontal movement
  let vertical = 0;
  let horizontal = 0;

  // Iterate through each direction in the walk
  for (let direction of walk) {
    // Update counters based on direction
    // North and East are positive, South and West are negative
    vertical += direction === "n" ? 1 : direction === "s" ? -1 : 0;
    horizontal += direction === "e" ? 1 : direction === "w" ? -1 : 0;
  }

  //   Check if we've returned to the starting point (both counters are 0)
  return vertical === 0 && horizontal === 0;
}

// Test cases
console.log(
  "Test 1:",
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
); // Should return true
console.log(
  "Test 2:",
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
); // Should return false
console.log("Test 3:", isValidWalk(["w"])); // Should return false
console.log(
  "Test 4:",
  isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])
); // Should return false

/**
Now, all test cases should produce the correct results:
- Test 1: true (10 steps, returns to start)
- Test 2: false (12 steps, too long)
- Test 3: false (1 step, too short)
- Test 4: false (10 steps, but doesn't return to start)

This solution correctly implements the requirements of the kata, checking both the length of the walk and whether it returns to the starting point.
 */
