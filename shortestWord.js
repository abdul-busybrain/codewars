/**
NOTE KATA 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

NOTE TOPIC
Fundamentals
 */

function findShort(s) {
  return Math.min(...s.split(" ").map((word) => word.length));
}
