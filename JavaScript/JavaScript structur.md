

---

## **1. JavaScript Basics**
### 1.1 What is JavaScript?
- JavaScript is a **client-side scripting language** used to make web pages interactive.
- It can run in a browser and on a server (Node.js).
- It is **loosely typed**, meaning you don’t need to define variable 

let data = 10;  // data is a number
console.log(typeof data); // Output: "number"

data = "Hello"; // Now, data is a string
console.log(typeof data); // Output: "string"

data = true; // Now, data is a boolean
console.log(typeof data); // Output: "boolean"

### 1.2 Variables & Data Types
- **Variables**: Used to store data. Declared using `var`, `let`, or `const`.
- **Data Types**:
  - **Primitive**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
  - **Non-primitive**: `object`, `array`, `function`

Example:
```javascript
let name = "Chandu"; // String
let age = 25;        // Number
let isDeveloper = true; // Boolean
let address = null;  // Null
let score;           // Undefined
let bigNumber = 9007199254740991n; // BigInt
```

### 1.3 Operators
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `**`
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`
- **Comparison**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical**: `&&`, `||`, `!`
- **Bitwise**: `&`, `|`, `^`, `~`, `<<`, `>>`
- **Ternary**: `condition ? trueValue : falseValue`

Example:
```javascript
let result = 5 > 3 ? "Yes" : "No"; // Yes
```

---

## **2. Control Flow**
### 2.1 Conditional Statements
- `if`, `else if`, `else`, `switch`

Example:
```javascript
let score = 85;
if (score > 90) {
  console.log("A Grade");
} else if (score > 75) {
  console.log("B Grade");
} else {
  console.log("C Grade");
}
```

### 2.2 Loops
- `for`, `while`, `do-while`, `for-in`, `for-of`

Example:
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i); // Prints 1 to 5
}
```

---

## **3. Functions**
### 3.1 Function Declaration
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Chandu"));
```

### 3.2 Function Expression
```javascript
const sum = function(a, b) {
  return a + b;
};
console.log(sum(5, 3));
```

### 3.3 Arrow Functions
```javascript
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));
```

---

## **4. Objects & Arrays**
### 4.1 Objects
```javascript
let person = {
  name: "Chandu",
  age: 25,
  skills: ["JavaScript", "React"],
  greet: function() {
    return `Hi, I am ${this.name}`;
  }
};
console.log(person.greet());
```

### 4.2 Arrays
```javascript
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[1]); // Banana
```

### 4.3 Array Methods
```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.push(6); // Adds 6 at the end
numbers.pop();   // Removes last element
numbers.shift(); // Removes first element
numbers.unshift(0); // Adds 0 at the start
console.log(numbers);
```

---

## **5. JavaScript Events**
```javascript
document.getElementById("btn").addEventListener("click", function() {
  alert("Button Clicked!");
});
```

---

## **6. DOM Manipulation**
```javascript
document.getElementById("title").innerText = "New Title";
document.querySelector(".container").style.color = "red";
```

---

## **7. Advanced JavaScript Concepts**
### 7.1 Closures
A function inside another function that retains access to the outer function’s variables.
```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
let counter = outer();
counter(); // 1
counter(); // 2
```

### 7.2 Promises & Async/Await
```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
}
fetchData().then(console.log);
```

### 7.3 ES6 Features
- **Destructuring**
```javascript
let user = { name: "Chandu", age: 25 };
let { name, age } = user;
console.log(name, age);
```
- **Spread Operator**
```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);
```
- **Modules**
```javascript
export function greet() {
  return "Hello!";
}
import { greet } from "./module.js";
console.log(greet());
```

---

