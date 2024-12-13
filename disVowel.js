/**
 * NOTE: KATA
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

NOTE: TOPICS:
Strings, Regular Expressions, Fundamentals
 */

function disVowel(str) {
  const lowStr = str.toLowerCase();

  // Define a regular expression that matches all vowels
  const vowels = /[aeiou]/gi;

  return lowStr.replace(vowels, "");
}

console.log(disVowel("This is me"));
