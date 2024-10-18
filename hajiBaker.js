/**
 * NOTE: KATA
 * Haji likes to bake some breads. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many breads he could bake considering his recipes?

Write a javascript function breads(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of breads Haji can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
 */

/**
 * @description Calculates the maximum number of breads that can be baked given  a recipe and available ingredients.
 *
 * @param {Object} recipe - An object representing the recipe, where keys are ingredients and values are required amounts
 * @param {Object} available - An object representing available ingredients, where keys are ingredients and values are available amounts.
 * @returns  {number} The maximum number of breads that can be baked.
 */

function breads(recipe, available) {
  let maxBreads = Infinity;

  // Iterate through each ingredients in the recipe
  for (let ingredient in recipe) {
    // If an ingredient is missing, return 0 (no breads can be made)
    if (!(ingredient in available)) return 0;

    // Calculate how many breads can be made with this ingredients
    const possibleBreads = Math.floor(
      available[ingredient] / recipe[ingredient]
    );

    // Update maxBreads if this ingredient allows for fewer breads
    maxBreads = Math.min(maxBreads, possibleBreads);
  }

  return maxBreads;
}

// Test cases
console.log(
  breads(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
); // Expected output: 2

console.log(
  breads(
    { coconut: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
); // Expected output: 0

console.log(
  breads(
    { cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { cream: 400, flour: 900, sugar: 600, milk: 400, oil: 300 }
  )
); // Expected output: 2

console.log(
  breads(
    { cream: 1, flour: 3, sugar: 1, milk: 1, oil: 1, eggs: 1 },
    { cream: 1, flour: 3, sugar: 1, milk: 1, oil: 1, eggs: 1 }
  )
); // Expected output: 1

console.log(
  breads(
    { cream: 1, flour: 3, sugar: 1, milk: 1, oil: 1, eggs: 1 },
    { cream: 1, flour: 3, sugar: 1, milk: 1, oil: 1 }
  )
); // Expected output: 0
