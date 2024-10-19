/**
 * NOTE: KATA
 * This time we want to write calculations using Javascript functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
NOTE: TOPIC Functional Programming
 */

/**
 * Funtional Calculator
 * This module implements a funtional-style calculator that allows for -
 * chained operations on numbers from 0 - 9. It demonstrated -
 * the use of-
 * higher-order functions and closures in JavaScript
 */

/**
 * @description - Creates a functions that represents a number in our calculator.
 *
 * @param {number} number - The number to be represented (0-9)
 * @returns {Function} A function that either returns the number or applies an operation to it.
 */
const createNumber = (number) => (operation) =>
  operation ? operation(number) : number;

// Number functions
// Each of these functions represents a number and can be used in calculations
const zero = createNumber(0);
const one = createNumber(1);
const two = createNumber(2);
const three = createNumber(3);
const four = createNumber(4);
const five = createNumber(5);
const six = createNumber(6);
const seven = createNumber(7);
const eight = createNumber(8);
const nine = createNumber(9);

/**
 * @description - Creates a function for mathematical operation
 *
 * @param {Function} operation - A binary function representing the mathematical operation.
 * @returns {Function} A hiher-order function that takes two numbers and applies the operation
 */
const createOperation = (operation) => (y) => (x) => operation(x, y);

// Operations functions
// These functions represent the four basic arithmetic operations
// Note: The order parameters in the inner functions (x,y) is important,
// as it affects the order of operations in subtraction and division
const plus = createOperation((x, y) => x + y);
const minus = createOperation((x, y) => x - y);
const times = createOperation((x, y) => x * y);
const dividedBy = createOperation((x, y) => Math.floor(x / y)); //Integer division

// Test cases
console.log("- Basic Operations -");
console.log("7 * 5 =", seven(times(five()))); //Expected 35
console.log("4 + 9 =", four(plus(nine()))); // Expected 13
console.log("8 - 3 =", eight(minus(three()))); // Expected output: 5
console.log("6 / 2 =", six(dividedBy(two()))); // Expected output: 3
console.log("8 / 3 =", eight(dividedBy(three()))); // Expected output: 2 (integer division)

console.log("\n--- Additional Test Cases ---");
console.log("0 + 1 =", zero(plus(one()))); // Expected output: 1
console.log("9 - 5 =", nine(minus(five()))); // Expected output: 4
console.log("3 * 4 =", three(times(four()))); // Expected output: 12
console.log("7 / 2 =", seven(dividedBy(two()))); // Expected output: 3 (integer division)
/**
 * Note on the implementation:
 *
 * 1. Currying: The implementation uses currying, a technique in funtional programming -
 * where a function with multiple arguments is transformed into a sequence of functions -
 * each with a single argument
 *
 *
 */
