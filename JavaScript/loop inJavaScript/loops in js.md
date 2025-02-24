 **loops in JavaScript** along with **5 examples** for each loop type. 📚

---

### ✅ **1. `for` Loop**
The `for` loop repeats a block of code a specific number of times.

**Syntax:**
```javascript
for (initialization; condition; increment) {
    // code block to execute
}
```

**Examples:**
```javascript
// Example 1: Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Example 2: Sum of first 10 numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum:", sum);

// Example 3: Print even numbers between 1 to 10
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Example 4: Loop through an array
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Example 5: Reverse a string
let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed:", reversed);
```

---

### ✅ **2. `while` Loop**
The `while` loop executes a block of code **as long as the condition is true**.

**Syntax:**
```javascript
while (condition) {
    // code block to execute
}
```

**Examples:**
```javascript
// Example 1: Print numbers 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Example 2: Print even numbers up to 10
let num = 2;
while (num <= 10) {
    console.log(num);
    num += 2;
}

// Example 3: Countdown from 5
let countdown = 5;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

// Example 4: Find factorial of a number
let n = 5;
let fact = 1;
while (n > 0) {
    fact *= n;
    n--;
}
console.log("Factorial:", fact);

// Example 5: Sum of digits of a number
let number = 123;
let sumDigits = 0;
while (number > 0) {
    sumDigits += number % 10;
    number = Math.floor(number / 10);
}
console.log("Sum of digits:", sumDigits);
```

---

### ✅ **3. `do...while` Loop**
The `do...while` loop is similar to `while`, but it **executes at least once**, even if the condition is false.

**Syntax:**
```javascript
do {
    // code block to execute
} while (condition);
```

**Examples:**
```javascript
// Example 1: Print numbers 1 to 5
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// Example 2: Print odd numbers up to 10
let odd = 1;
do {
    console.log(odd);
    odd += 2;
} while (odd <= 10);

// Example 3: Guessing game simulation
let secretNumber = 7;
let guess;
do {
    guess = Math.floor(Math.random() * 10) + 1;
    console.log("Guess:", guess);
} while (guess !== secretNumber);

// Example 4: Validate user input
let userInput;
do {
    userInput = prompt("Enter a positive number:");
} while (userInput <= 0);

// Example 5: Print multiplication table of 5
let x = 1;
do {
    console.log(`5 x ${x} = ${5 * x}`);
    x++;
} while (x <= 10);
```

---

### ✅ **4. `for...in` Loop**
The `for...in` loop iterates over **keys (properties)** of an object.

**Syntax:**
```javascript
for (key in object) {
    // code block to execute
}
```

**Examples:**
```javascript
// Example 1: Loop through an object
let person = { name: "Chandu", age: 22, city: "Hyderabad" };
for (let key in person) {
    console.log(key + ":", person[key]);
}

// Example 2: Count object properties
let car = { brand: "Toyota", model: "Camry", year: 2020 };
let count = 0;
for (let prop in car) {
    count++;
}
console.log("Total properties:", count);

// Example 3: Uppercase object values
let user = { firstName: "chandu", lastName: "kumar" };
for (let key in user) {
    console.log(user[key].toUpperCase());
}

// Example 4: Loop through an array (not recommended)
let colors = ["red", "green", "blue"];
for (let index in colors) {
    console.log(index, colors[index]);
}

// Example 5: Find max value in an object
let scores = { math: 90, science: 85, english: 88 };
let maxScore = 0;
for (let subject in scores) {
    if (scores[subject] > maxScore) {
        maxScore = scores[subject];
    }
}
console.log("Highest score:", maxScore);
```

---

### ✅ **5. `for...of` Loop**
The `for...of` loop iterates over **values** of an iterable (like arrays, strings, maps, etc.).

**Syntax:**
```javascript
for (value of iterable) {
    // code block to execute
}
```

**Examples:**
```javascript
// Example 1: Loop through an array
let animals = ["cat", "dog", "rabbit"];
for (let animal of animals) {
    console.log(animal);
}

// Example 2: Loop through a string
let word = "hello";
for (let char of word) {
    console.log(char);
}

// Example 3: Sum of array elements
let numbers = [10, 20, 30];
let total = 0;
for (let num of numbers) {
    total += num;
}
console.log("Sum:", total);

// Example 4: Loop through Map
let userMap = new Map([
    ["name", "Chandu"],
    ["age", 22],
    ["city", "Hyderabad"],
]);
for (let [key, value] of userMap) {
    console.log(`${key}: ${value}`);
}

// Example 5: Unique values using Set
let uniqueValues = new Set([1, 2, 3, 4, 5]);
for (let value of uniqueValues) {
    console.log(value);
}
```

---

### 📌 **Summary of Loops in JavaScript**
| Loop Type      | Best For                                |
|----------------|----------------------------------------|
| `for`          | Fixed number of iterations (arrays, counters) |
| `while`        | Unknown iterations (until condition is false) |
| `do...while`   | At least one iteration (post-check loop)       |
| `for...in`     | Iterating object properties (not arrays)       |
| `for...of`     | Iterating over array values, strings, maps, sets |

