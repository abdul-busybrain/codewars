/**
 * Kata: Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...


// Example usage:
// const myFriends = ["Umar", "Abubakar", "Habu", "Musa"];
// const result = friend(myFriends);
// console.log(result); // Output: ["Umar", "Habu", "Musa"]
 */

/**
 * Filters a list of friends based on the length of their names.
 *
 * @param {Array} friends - An array of strings representing friends' names.
 * @returns {Array} - A filtered array containing only the names that have exactly 4 characters.
 */
function filterFriends(friends) {
  // Use the Array.prototype.filter method to iterate over each friend's name.
  // The filter method returns a new array containing only the elements that meet the condition.

  return friends.filter(
    (friendsName) =>
      // Check if the length of the current friendsName's  is exactly 4 characters.
      friendsName.length === 4
  );
}
