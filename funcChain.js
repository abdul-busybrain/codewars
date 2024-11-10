/**
 * // NOTE KATA
 * Function composition is a powerful technique. For example:

function sum(x, y) {
  return x + y;
}

function double(x) {
  return sum(x, x);
}

function minus (x, y) {
  return x - y;
}

function addOne(x) {
  return sum(x, 1);
}

double(sum(2, 3)); // 10
But in complex expressions, composition may be difficult to understand. For example:

double(double(addOne(sum(7, minus(sum(5, sum(4, 5)), 4))))); // 72
In this kata, we will implement a function that allows us to perform this by applying a fluid style:

c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute(); // 72
Your job is implement the chain function:

function chain(fns) {
}

const c = chain({sum, minus, double, addOne});
As you can see, this function receives the methods to be chained and returns an object that allows you to call the chained methods. The result is obtained by calling the execute method.

Chained functions receive an arbitrary number of arguments. The first function in the chain receives all its arguments. In the other functions, the first argument is the result of the previous function and then it only receives the remainder arguments (second, third, etc.). The tests always pass the appropriate arguments and you do not have to worry about checking this.

Note that the chain can be reused (the internal state is not stored):

c.sum(3, 4).execute(); //7
c.sum(1, 2).execute(); //3
Other examples:

const c1 = c.sum(1, 2);
c1.execute(); // == fns.sum(1, 2) == 3
c1.double().execute(); // == fns.double(fns.sum(1, 2)) == 6
c1.addOne().execute(); // == fns.addOne(fns.sum(1, 2)) == 4
c1.execute(); // == fns.sum(1, 2) == 3

const c2 = c1.sum(5);
c2.addOne().execute(); // == fns.addOne(fns.sum(fns.sum(1, 2) 5)) == 9
c2.sum(3).execute(); // == fns.sum(c1.sum(fns.sum(1, 2), 5), 3) == 11
c2.execute(); // == fns.sum(fns.sum(1, 2), 5) == 8

c1.execute(); // == fns.sum(1, 2) == 3
NOTE: Topic Functional Programming
 */

/**
 * NOTE: JSDoc Creates a chainable API from a collection of functions
 *
 * @param {Object} functions - An object containing named functions to be chained
 * @returns {Object} A chainable object with methods corresponding to the input functions
 *
 * @example
 * const calculations = chain({
 *   add: (x, y) => x + y,
 *   multiply: (x, y) => x * y
 * });
 *
 * calculations.add(5, 3).multiply(2).execute(); // Returns: 16
 */
function chain(functions) {
  /**
   * Create a new chain object with the current value and all chainable methods
   *
   * @params {*} initialValue - The value to be passed through the chain
   * @returns {Object} An object with chainable methods and value storage
   *
   * @private
   */
  function createChain(initialValue) {
    // Create base chain object with value storage and method
    const chainObj = {
      // Store the current value in the chain
      value: initialValue,

      /**
       * Terminates the chain and returns the final value
       * @returns {*} The final computed value
       */
      execute: function () {
        return this.value;
      },
    };

    // Dynamically add all functions as chainable methods
    Object.keys(functions).forEach((fnName) => {
      /**
       * Creates a chainable version of each input function
       *
       * @params {...*} argd - Arguments to pass to the functions
       * @returns {Object} A new chain object with the computed value
       */
      chainObj[fnName] = function (...args) {
        return createChain(
          // Handle both initial function call and subsequent chained calls
          this.value === undefined
            ? functions[fnName](...args) // Initial call: just pass provided args
            : functions[fnName](this.value, ...args) // Chained call: include previous value
        );
      };
    });

    return chainObj;
  }

  //   Start the chain with undefined initial value
  return createChain(undefined);
}
