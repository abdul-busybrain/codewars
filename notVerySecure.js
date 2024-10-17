/**
 * NOTE: KATA
 * Write a Javascript function to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

- At least one character ("" is not valid)
- Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
- No whitespaces / underscore
NOTE: TOPIC Regular Expressions Strings
 */

function alphaNumeric(str) {
  // Check if the string is not empty
  // This is necessary because an empty string would pass the regex test, -
  // but doesn't meet our "at least one character " requirement
  if (str.length === 0) return false;

  //   Use a regular expression to check if the string contains only alphaNumeric characters
  // ^ asserts the start of the string
  // [a-zA-Z0-9] matches any single characters in the range a-z, A-Z, 0-9
  // + requires one or more of the preceding token
  // $ asserts the end of the string
  const alphaNumericRegex = /^[a-zA-Z0-9]+$/;

  //   Test the string against the regex and return the result
  return alphaNumericRegex.test(str);
}

// Test cases
console.log("Empty string:", alphaNumeric("")); // false
console.log("alphaNumeric:", alphaNumeric("abc123")); // true
console.log("With Npace:", alphaNumeric("abc 123")); // false
console.log("With underscore:", alphaNumeric("abc_123")); // false
console.log("With special character:", alphaNumeric("abc@123")); // false
console.log("Only letters:", alphaNumeric("abcDEF")); // true
console.log("Only numbers:", alphaNumeric("123456")); // true
console.log("Mixed case:", alphaNumeric("aBc123DEF")); // true
