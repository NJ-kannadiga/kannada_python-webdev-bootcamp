// 4. Useful Array Methods

// .push() - Adds one or more elements to the end of an array and returns the new length of the array
const fruits = ["apple", "banana"];
fruits.push("orange"); // Adds "orange" to the end
console.log(fruits);  // ["apple", "banana", "orange"]

fruits.push("grape", "kiwi"); // Adds "grape" and "kiwi" to the end
console.log(fruits);  // ["apple", "banana", "orange", "grape", "kiwi"]

// .pop() - Removes the last element from an array and returns that element
const lastFruit = fruits.pop(); // Removes "kiwi"
console.log(lastFruit);  // "kiwi"
console.log(fruits);  // ["apple", "banana", "orange", "grape"]

// .shift() - Removes the first element from an array and returns that element
const firstFruit = fruits.shift(); // Removes "apple"
console.log(firstFruit);  // "apple"
console.log(fruits);  // ["banana", "orange", "grape"]

// .unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array
fruits.unshift("strawberry"); // Adds "strawberry" to the beginning
console.log(fruits);  // ["strawberry", "banana", "orange", "grape"]

// .map() - Creates a new array with the results of calling a provided function on every element in the calling array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2); // Doubles each number
console.log(doubledNumbers);  // [2, 4, 6, 8, 10]

// .filter() - Creates a new array with all elements that pass the test implemented by the provided function
const greaterThanTwo = numbers.filter(num => num > 2); // Filters numbers greater than 2
console.log(greaterThanTwo);  // [3, 4, 5]

// .forEach() - Executes a provided function once for each array element
fruits.forEach(function(fruit) {
  console.log(fruit); // Prints each fruit
});
// Output:
// strawberry
// banana
// orange
// grape

// .includes() - Checks if an array contains a certain element, returns true or false
const hasBanana = fruits.includes("banana"); // Checks if "banana" is in the array
console.log(hasBanana);  // true

const hasPineapple = fruits.includes("pineapple"); // Checks if "pineapple" is in the array
console.log(hasPineapple);  // false

// .indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present
const indexOfOrange = fruits.indexOf("orange"); // Finds the index of "orange"
console.log(indexOfOrange);  // 2

const indexOfPineapple = fruits.indexOf("pineapple"); // Finds the index of "pineapple"
console.log(indexOfPineapple);  // -1 (not found)

// .slice() - Returns a shallow copy of a portion of an array into a new array object
const slicedFruits = fruits.slice(1, 3); // Extracts elements from index 1 to index 3 (excluding index 3)
console.log(slicedFruits);  // ["banana", "orange"]

// .splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements
fruits.splice(1, 1, "pear", "peach"); // Removes 1 element from index 1 and adds "pear" and "peach"
console.log(fruits);  // ["strawberry", "pear", "peach", "orange", "grape"]

// .join() - Joins all elements of an array into a single string and returns it
const fruitString = fruits.join(", "); // Joins all elements with ", "
console.log(fruitString);  // "strawberry, pear, peach, orange, grape"

// .concat() - Merges two or more arrays and returns a new array
const moreFruits = ["melon", "watermelon"];
const allFruits = fruits.concat(moreFruits); // Combines the two arrays
console.log(allFruits);  // ["strawberry", "pear", "peach", "orange", "grape", "melon", "watermelon"]

// .reverse() - Reverses the order of the elements in an array
const reversedFruits = allFruits.reverse(); // Reverses the array
console.log(reversedFruits);  // ["watermelon", "melon", "grape", "orange", "peach", "pear", "strawberry"]

// .sort() - Sorts the elements of an array in place and returns the sorted array
const sortedFruits = allFruits.sort(); // Sorts alphabetically
console.log(sortedFruits);  // ["grape", "melon", "orange", "peach", "strawberry", "watermelon"]

// .some() - Checks if at least one element in the array satisfies the provided testing function
const hasPeach = allFruits.some(fruit => fruit === "peach"); // Checks if "peach" is present
console.log(hasPeach);  // true

// .every() - Checks if all elements in the array satisfy the provided testing function
const allStartsWithVowel = allFruits.every(fruit => ["a", "e", "i", "o", "u"].includes(fruit[0].toLowerCase())); // Checks if all fruits start with a vowel
console.log(allStartsWithVowel);  // false (because "grape" doesn't start with a vowel)

// .find() - Returns the first element that satisfies the provided testing function
const firstFruitWithO = allFruits.find(fruit => fruit.includes("o")); // Finds the first fruit that includes the letter "o"
console.log(firstFruitWithO);  // "melon"

// .reduce() - Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
const sum = numbers.reduce((acc, num) => acc + num, 0); // Sums all numbers
console.log(sum);  // 15
