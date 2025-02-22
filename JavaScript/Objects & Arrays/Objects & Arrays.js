// 1. Objects in JavaScript

// Creating an object
const person = {
    name: "John",
    age: 30,
    profession: "Developer"
  };
  
  // Accessing object properties
  console.log("Name:", person.name);            // "John"
  console.log("Age:", person.age);              // 30
  console.log("Profession:", person.profession); // "Developer"
  
  // Adding and updating object properties
  person.city = "New York";  // Adding a new property
  person.age = 31;           // Updating the age property
  
  console.log("City:", person.city);  // "New York"
  console.log("Updated Age:", person.age); // 31
  
  
  // 2. Arrays in JavaScript
  
  // Creating an array
  const fruits = ["apple", "banana", "orange"];
  console.log("\nFruits Array:", fruits);  // ["apple", "banana", "orange"]
  
  // Accessing array elements
  console.log("First Fruit:", fruits[0]);   // "apple"
  console.log("Second Fruit:", fruits[1]);  // "banana"
  
  // Adding to an array
  fruits.push("grape");  // Adds "grape" to the end of the array
  console.log("Updated Fruits Array:", fruits);  // ["apple", "banana", "orange", "grape"]
  
  // Looping through an array
  console.log("\nFruits Loop:");
  fruits.forEach(function(fruit) {
    console.log(fruit);
  });
  
  // Output:
  // apple
  // banana
  // orange
  // grape
  
  
  // 3. Combining Objects and Arrays
  
  // Creating an object with an array inside it
  const student = {
    name: "Alice",
    courses: ["Math", "Science", "History"]
  };
  
  console.log("\nStudent Info:");
  console.log("Name:", student.name);         // "Alice"
  console.log("Courses:", student.courses);   // ["Math", "Science", "History"]
  console.log("Second Course:", student.courses[1]); // "Science"
  
  
  // 4. Useful Array Methods
  
  const numbers = [1, 2, 3, 4, 5];
  
  // Using .map() to double each number
  const doubled = numbers.map(num => num * 2);
  console.log("\nDoubled Numbers:", doubled); // [2, 4, 6, 8, 10]
  
  // Using .filter() to get all numbers greater than 2
  const greaterThanTwo = numbers.filter(num => num > 2);
  console.log("Numbers greater than 2:", greaterThanTwo); // [3, 4, 5]
  
  
  // 5. Nested Objects and Arrays
  
  // Creating a nested object with arrays
  const library = {
    name: "City Library",
    books: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { title: "1984", author: "George Orwell" }
    ]
  };
  
  // Accessing nested data
  console.log("\nLibrary Books:");
  console.log("First Book Title:", library.books[0].title);   // "The Great Gatsby"
  console.log("Second Book Author:", library.books[1].author); // "George Orwell"
  