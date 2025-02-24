**JavaScript function**:  

---

## **1. Function Declaration**
✅ **Definition:**  
A **function declaration** defines a named function using the `function` keyword. These functions are **hoisted**, meaning they can be called **before** their declaration in the code.  

### Example 1: Add Two Numbers
```javascript
function add(a, b) {
  return a + b;
}
console.log(add(10, 5)); // Output: 15
```

### Example 2: Check Even or Odd
```javascript
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // Output: true
```

### Example 3: Find Maximum Number
```javascript
function findMax(x, y) {
  return x > y ? x : y;
}
console.log(findMax(8, 12)); // Output: 12
```

### Example 4: Calculate Factorial
```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
```

### Example 5: Greet User
```javascript
function greetUser(name) {
  return `Welcome, ${name}!`;
}
console.log(greetUser("Chandu")); // Output: Welcome, Chandu!
```

---

## **2. Function Expression**
✅ **Definition:**  
A **function expression** is a function assigned to a variable. These functions are **not hoisted**, so you must define them **before** calling them.  

### Example 1: Multiply Two Numbers
```javascript
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // Output: 12
```

### Example 2: Reverse a String
```javascript
const reverseString = function(str) {
  return str.split('').reverse().join('');
};
console.log(reverseString("hello")); // Output: olleh
```

### Example 3: Square a Number
```javascript
const square = function(num) {
  return num * num;
};
console.log(square(6)); // Output: 36
```

### Example 4: Check if a Number is Positive
```javascript
const isPositive = function(num) {
  return num > 0;
};
console.log(isPositive(-5)); // Output: false
```

### Example 5: Convert Celsius to Fahrenheit
```javascript
const toFahrenheit = function(celsius) {
  return (celsius * 9/5) + 32;
};
console.log(toFahrenheit(25)); // Output: 77
```

---

## **3. Arrow Function**
✅ **Definition:**  
An **arrow function** is a shorter syntax introduced in **ES6**. They do **not** have their own `this` context and are best for **simple** functions.  

### Example 1: Subtract Two Numbers
```javascript
const subtract = (a, b) => a - b;
console.log(subtract(10, 3)); // Output: 7
```

### Example 2: Find the Length of a String
```javascript
const getLength = str => str.length;
console.log(getLength("JavaScript")); // Output: 10
```

### Example 3: Double an Array's Values
```javascript
const doubleArray = arr => arr.map(num => num * 2);
console.log(doubleArray([1, 2, 3])); // Output: [2, 4, 6]
```

### Example 4: Check if a Number is Odd
```javascript
const isOdd = num => num % 2 !== 0;
console.log(isOdd(7)); // Output: true
```

### Example 5: Calculate the Area of a Rectangle
```javascript
const area = (length, width) => length * width;
console.log(area(5, 8)); // Output: 40
```

---

