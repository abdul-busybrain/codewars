/**
 * NOTE: KATA Break Camel case
 *Complete the solution so that the function will break up camel casing, using a space between words.
 */

function breakCamelcase(string) {
  // Input validation
  if (typeof string !== "string") {
    throw new Error("Input must be a string");
  }

  // Regular expression to match uppercase letters preceded by lowercase letters
  const regex = /([a-z])([A-Z])/g;

  // Replace matching occurencies with the first letter followed by a space and the second letter
  //   $1 represents the matched lowercase letter (capturing group 1)
  // $2 represents the matched uppercase letter (capturing group 2)
  return string.replace(regex, "$1 $2 ");
}

// Example usage
console.log(breakCamelcase("camelCase"));
console.log(breakCamelcase("thisIsALongVariableName"));
console.log(breakCamelcase("ABC"));
