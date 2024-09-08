/**
 * Kata {DETECT PANAGRAM}
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

NOTE: [STRINGS, DATA STRUCTURES, FUNDAMENTALS]
 */

/**
 * Determine if a given string is a panagram.
 *
 * A pangram is a sentence that contains every letter of the alphabet at least once.
 *
 * @param {string} string - The input string to check
 * @returns {boolean} True is the string is a panagram, false otherwise
 */

function isPangram(string) {
  // Convert the string to lowercase to ignore case sensitivity
  const lowercaseString = string.toLowerCase();

  // Create a set to store unique letters
  const letterSet = new Set();

  // Iterate throught each character in the lowercase string
  for (const char of lowercaseString) {
    // Check if the character is a letter (ASCII range 97-122)

    if (char >= "a" && char <= "z") {
      // Add the letter to the set if its not already present
      letterSet.add(char);
    }
  }

  // If the set contains 26 unique letters, it's panagram
  return letterSet.size === 26;
}
