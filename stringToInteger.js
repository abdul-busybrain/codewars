/**
 * NOTE: KATA
 * In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them
NOTE: TOPIC
Parsing, Strings, Algorithms
 */

function parseInt(string) {
  // 0 (Crucial Step!): Lowercase Conversion and trimming Whitespaces
  string = string.toLowerCase();
  string = string.trim();

  // Step 1: Establish word to number mappings
  // Create precise dictionaries for different number representations
  const smallNumbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
  };
  const tens = {
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };

  const scales = {
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  //   Step 2: String normalization
  // Remove 'and' to simplify parsing (e.g 'one hundred and twenty' → 'one hundred twenty')
  string = string.replace(/ and /g, " ");

  //   Step 3: Tokenization
  // Break the string into individual word tokens, handling spaces and hyphens
  const tokens = string.split(/[\s-]+/);

  // Step 4: Incremental parsing
  let total = 0; // Tracking accumulated large-scale numbers
  let current = 0; // Tracking current number being built

  tokens.forEach((token) => {
    // Small numbers: Direct value addition
    if (smallNumbers[token] !== undefined) {
      current += smallNumbers[token];
    }

    // Tens: Multiple of 10 addition
    else if (tens[token] !== undefined) {
      current += tens[token];
    }

    // Scaling: Handle hundreds, thousands, millions
    else if (scales[token] !== undefined) {
      // Hundred scales multiply current number
      if (token === "hundred") {
        current *= scales[token];
      }

      // Thousand/Millions scales add to total and reset
      else {
        total += current * scales[token];
        current = 0;
      }
    }
  });

  // Step 5: Final accumulation
  // Add any remaining current value to total
  return total + current;
}

// Usage example
console.log(parseInt("one"));
console.log(parseInt("ninety-nine"));
console.log(parseInt("two tHousand one hundred and seventy eight"));
