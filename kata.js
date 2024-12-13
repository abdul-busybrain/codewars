function disemvowel(str) {
  // Define a regular expression that matches all vowels (case-insensitive)
  const vowels = /[aeiou]/gi;

  // Use the replace method to remove all vowels from the string
  return str.replace(vowels, "");
}

// Test cases
console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
console.log(disemvowel("What are you, a communist?")); // "Wht r y,  cmmnst?"
