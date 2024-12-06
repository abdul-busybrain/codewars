/**
 * NOTE: KATA
 * Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

NOTE: TOPIC Strings, Date Time, Algorithms
 */

// Step 1: FUnction Definition and purpose
function formatDuration(seconds) {
  // This function converts a number of seconds into a human-readable time duration string
  // It handles various time units from years down to seconds

  // Setpe 2: Edge case handling
  if (seconds === 0) return "now";
  // If input is zero seconds, immediately return 'now'

  // Step 3: Define time units
  const timeUnits = [
    { unit: "year", seconds: 31536000 }, // Seconds in a year (365days)
    { unit: "day", seconds: 86400 }, // Seconds in a day
    { unit: "hour", seconds: 3600 }, // Seconds in an hour
    { unit: "minute", seconds: 60 }, // Seconds in a minute
    { unit: "second", seconds: 1 }, // Base unit
  ];

  //   Step 4: Initialize result storage
  const parts = [];
  // Array to store formatted time unit strings

  // Step 5: Iterative time unit conversion
  for (const { unit, seconds: unitSeconds } of timeUnits) {
    // Loop through each time unit from largest to smallest
    if (seconds >= unitSeconds) {
      // If current seconds are greater than or equal to this unit's seconds

      // Calculate how many unit of this fit into total seconds
      const count = Math.floor(seconds / unitSeconds);

      // Create a formatted string (e.g, '2 years' or '1 day')
      // Use plural form if count > 1
      parts.push(`${count} ${unit}${count > 1 ? "s" : ""}`);

      //   Reduce total seconds by the amount we've just processed
      seconds %= unitSeconds;
    }
  }

  //   Step 6: Formatting result string
  if (parts.length === 1) return parts[0];
  // If only one unit, return it directly

  if (parts.length === 2) return parts.join(" and ");
  // If two units, join with "and"

  // Step 7: Complex multiple units formatting
  // For 3+ units, use comma separation with "and" before last unit
  return parts.slice(0, -1).join(", ") + " and " + parts.slice(-1);
}

// Step 8: Demonstrate usage with test cases
console.log(formatDuration(0));
console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3662));
console.log(formatDuration(15731080));
