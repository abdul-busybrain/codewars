/**
 * Kata={ Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.}

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

/**
 * Converts a string with dash or underscore delimiters into camelCase.
 * The first word is only capitalized if it was capitalized in the original string.
 * All subsequent words are capitalized and delimiters are removed.
 *
 * @param {string} str - The input string to convert (e.g. "hello-world" or "this_is_it").
 * @returns {string} - The camelCased version of the string.
 */
function toCamelCase(str) {
  return (
    str
      // Split the string into an array using regex to match both dashes and underscores
      .split(/[-_]/)

      // Map over each word in the resulting array
      .map((word, index) => {
        // For the first word, return it as is (without capitalizing) but preserve its case
        if (index === 0) {
          return word.charAt(0) + word.slice(1); // Return first letter + rest of the word
        }

        // For subsequent words, capitalize the first letter and convert the rest to lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })

      // Join the array back into a single string with no delimiters
      .join("")
  );
}

// Example usage:
console.log(toCamelCase("hello_world")); // Output: "helloWorld"
console.log(toCamelCase("Hello-World")); // Output: "HelloWorld"
console.log(toCamelCase("convert-this_toCamelCase")); // Output: "convertThisToCamelCase"
