

# JavaScript Basics

## 1. Objects in JavaScript

Objects are collections of key-value pairs. A key (also called a property) is a string, and the value can be anything—strings, numbers, arrays, other objects, etc.

### Example of an Object:

```javascript
const person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

console.log(person.name); // "John"
console.log(person.age);  // 30
console.log(person.profession); // "Developer"
```

### Adding or Updating Object Properties:

You can add new properties to an object or update existing ones as follows:

```javascript
person.city = "New York"; // Adds a new property
person.age = 31;          // Updates the 'age' property

console.log(person.city);  // "New York"
console.log(person.age);   // 31
```

### Accessing Object Properties:

You can access object properties using either **dot notation** or **bracket notation**:

- **Dot notation:** `person.name`
- **Bracket notation:** `person["name"]`

---

## 2. Arrays in JavaScript

Arrays are ordered collections of values. Each value in an array has a numeric index, starting from 0.

### Example of an Array:

```javascript
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "orange"
```

### Adding to an Array:

You can add items to the end of an array using `.push()`:

```javascript
fruits.push("grape"); // Adds "grape" to the end of the array
console.log(fruits);   // ["apple", "banana", "orange", "grape"]
```

### Looping Through an Array:

You can use a `for` loop or methods like `.forEach()` to iterate over an array.

```javascript
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Output:
// apple
// banana
// orange
// grape
```

---

## 3. Combining Objects and Arrays

Objects can contain arrays, and arrays can contain objects. You can work with these nested structures to create complex data models.

### Example of an Object with an Array:

```javascript
const student = {
  name: "Alice",
  courses: ["Math", "Science", "History"]
};

console.log(student.name);    // "Alice"
console.log(student.courses); // ["Math", "Science", "History"]
console.log(student.courses[1]); // "Science"
```

---

## 4. Useful Array Methods

Here are some commonly used array methods:

- `.push()`: Adds an item to the end of the array.
- `.pop()`: Removes the last item from the array.
- `.shift()`: Removes the first item from the array.
- `.unshift()`: Adds an item to the beginning of the array.
- `.map()`: Creates a new array with the results of calling a provided function on every element in the array.
- `.filter()`: Creates a new array with all elements that pass the test implemented by the provided function.

### Example using `.map()` and `.filter()`:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Double each number in the array
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Get all numbers greater than 2
const greaterThanTwo = numbers.filter(num => num > 2);
console.log(greaterThanTwo); // [3, 4, 5]
```

---

## 5. Nested Objects and Arrays

Sometimes, you might have objects and arrays within objects, or vice versa. This is called **nesting** and allows for complex data structures.

### Example of a Nested Object with an Array:

```javascript
const library = {
  name: "City Library",
  books: [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" }
  ]
};

// Accessing nested data
console.log(library.books[0].title);  // "The Great Gatsby"
console.log(library.books[1].author); // "George Orwell"
```

---

## Additional Topics

- **Working with JSON (JavaScript Object Notation):** Learn how to convert between objects and JSON format.
- **Manipulating Complex Data Structures:** Combining nested objects, arrays, and loops for more sophisticated data models.
- **Destructuring Objects and Arrays:** A concise way to access values directly from objects or arrays.
- **ES6 Enhancements:** Introduction to `const`, `let`, the spread operator (`...`), and the rest parameter (`...`).

---

## Array Methods

Here is a list of commonly used array methods in JavaScript:

- `.push()`: Adds one or more elements to the end of an array.
- `.pop()`: Removes the last element of the array.
- `.shift()`: Removes the first element of the array.
- `.unshift()`: Adds one or more elements to the beginning of an array.
- `.map()`: Creates a new array with the results of applying a function to each element.
- `.filter()`: Creates a new array with elements that pass the provided condition.
- `.forEach()`: Executes a provided function once for each element in the array.
- `.includes()`: Checks if an element exists in the array and returns `true` or `false`.
- `.indexOf()`: Returns the index of the first occurrence of an element, or `-1` if not found.
- `.slice()`: Creates a shallow copy of a portion of an array.
- `.splice()`: Adds or removes elements from an array.
- `.join()`: Joins array elements into a single string.
- `.concat()`: Combines multiple arrays into one.
- `.reverse()`: Reverses the order of the elements in an array.
- `.sort()`: Sorts the array in place.
- `.some()`: Checks if at least one element satisfies a condition.
- `.every()`: Checks if all elements satisfy a condition.
- `.find()`: Returns the first element that satisfies a condition.
- `.reduce()`: Reduces the array to a single value by applying a function to the elements.

---

