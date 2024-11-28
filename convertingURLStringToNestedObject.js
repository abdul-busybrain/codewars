/**
 * NOTE: KATA In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:
user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue

Your method should return an object hash-map that looks like this:
{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}
You can expect valid input. You won't see input like:
// This will NOT happen
foo=1&foo.bar=2

All properties and values will be strings — and the values should be left as strings to pass the tests.
Make sure you decode the URI components correctly

NOTE: TOPIC: ALGORITHMS
 */

function convertQueryToMap(query) {
  // Step 1: Handle empty input
  // If the query is falsy (empty string, null, undefinde), return an empty object
  if (!query) return {};

  // Step 2: Split the query string into key-value pairs
  // The '&' character separates different key-value pairs in a query string
  const pairs = query.split("&");

  // Step 3: Initialize the result object
  // This will store our final nested object
  const result = {};

  // Step 4: Process each key-value pair
  for (const pair of pairs) {
    // Step 5: Split each pair into key and value
    // The '=' character separates the key from the value
    // We used decodeURIComponent to handle URL-encoded characters (like %20 for space)
    const [key, value] = pair.split("=").map(decodeURIComponent);

    // Step 6: Split the key into parts
    // The '.' character in the key indicates nesting
    const keys = key.split(".");

    // Step 7: Initialize a pointer to the current level of the result object
    // We'll use this to traverse and build the nested structure
    let current = result;

    // Step 8: Traverse the nested structure
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];

      // Step 9: Check if we're the last key in the chain
      if (i === keys.length - 1) {
        // If it's the last key, assign the value
        current[k] = value;
      } else {
        // If it's not the last key, ensure the next level exist
        // If it doesn't exist, create an empty object
        current[k] = current[k] || {};
        // Move our pointer to the next level
        current = current[k];
      }
    }
  }

  // Step 10: Return the final nested object
  return result;
}

// Test cases to demonstrate the function's behavior
console.log("Test case 1", "Standard nested query");
console.log(
  JSON.stringify(
    convertQueryToMap(
      "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue"
    ),
    null,
    2
  )
);
