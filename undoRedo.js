/**
 * NOTE: KATA
 * The purpose of this kata is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

set(key, value) Assigns the value to the key. If the key does not exist, creates it.

get(key) Returns the value associated to the key.

del(key) removes the key from the object.

undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

After set() or del() are called, there is nothing to redo.

All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

Any set/del after an undo should disallow new redos.

NOTE: Algorithms Fundamentals OOP
 */

// Step 1: Define the main function that creates an undo-redo manager
function undoRedo(obj) {
  // Step 2: Create a history object to track state changes
  const history = {
    // Array to store previous states for undo funtionality
    past: [],
    // Array to store future states for redo funtionality
    future: [],
  };

  // Step 3: Return a proxy object with enhanced object manipulation methods
  return {
    // Step 4: Implement the set method to add or modify object properties
    set(key, value) {
      // Creates a snapshot of the current object state before modification
      const previousState = { ...obj };

      // Directlty modify the original object
      obj[key] = value;

      // Clear the redo history when a new operation is performed
      history.future = [];

      // Add the previous state to the undo history
      history.past.push(previousState);
    },

    // Step 5: Implement the get method to retrieve object properties
    get(key) {
      // Simply return the value assocaited with the key
      return obj[key];
    },

    // Step 6: Implement the del method to remove object properties
    del(key) {
      // Create a snapshot of the current object state before deletion
      const previousState = { ...obj };

      // Remove the specified key from the object
      delete obj[key];

      // Clear the redo history
      history.future = [];

      // Add the previous state to the undo history
      history.past.push(previousState);
    },

    // Step 7: Implement the undo method to revert the last operation
    undo() {
      // Check if there are many operations to undo
      if (history.past.length === 0) {
        throw new Error("Nothing to undo");
      }

      // Store the current state in the redo history
      history.future.push({ ...obj });

      // Retrieve and restore the previous state
      const previousState = history.past.pop();

      // Clear the current object
      Object.keys(obj).forEach((key) => delete obj[key]);

      // Restore the previous state
      Object.assign(obj, previousState);

      return obj;
    },

    // Step 8: Implement the redo method to restore undone operations
    redo() {
      // Check if there are any operations to redo
      if (history.future.length === 0) {
        throw new Error("Nothing to redo");
      }

      // Retrive the state to be restored
      const futureState = history.future.pop();

      // Add current state to undo history
      history.past.push({ ...obj });

      // Clear the current object
      Object.keys(obj).forEach((key) => delete obj[key]);

      // Restore the future state
      Object.assign(obj, futureState);

      return obj;
    },
  };
}

// Step 9: Demonstrate usage of the undo-redo manager
// Create an initial object
const myObj = { x: 1, y: 2 };

// Create an undo-redo manager for the object
const manager = undoRedo(myObj);

// Step 10: Perform a set operation
manager.set("z", 3);
// Result: myObj is now {x:1, y:2, x:3}
// Undo history now contains the initial state {x:1, y:2}

// Step 11: Undo the last operation
manager.undo();
// Result: myObj is back to {x:1, y:2}
// Redo history now contains {x:1, y:2, z:3}

// Step 12: Redo the previously undone operation
console.log(manager.redo());
// Result: myObj is { x: 1, y: 2, z: 3 } again

// Step 13: Delete
manager.del("x");
console.log(myObj);
