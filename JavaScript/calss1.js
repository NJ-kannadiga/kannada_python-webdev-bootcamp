// Step 1: Create a student object with various properties (Variables & Data Types)
var studentName = "John Doe"; // String
const studentAge = 20;        // Number
var studentScore = 85;        // Number
var isDeveloper = false;      // Boolean
var studentAddress = null;    // Null (Address not provided)
const schoolCode = 9007199254740991n; // BigInt (School Code)

// Step 2: Display basic student information
console.log(`Student Name: ${studentName}`);
console.log(`Age: ${studentAge}`);
console.log(`Is Developer: ${isDeveloper ? "Yes" : "No"}`);
console.log(`Address: ${studentAddress ? studentAddress : "Not provided"}`);
console.log(`School Code: ${schoolCode}`);

// Step 3: Check if the score is valid (using comparison operators)
if (studentScore >= 0 && studentScore <= 100) {
  console.log("Valid score.");
} else {
  console.log("Invalid score.");
}

// Step 4: Calculate the grade using if-else (Control Flow)
var grade;
if (studentScore > 90) {
  grade = "A";
} else if (studentScore > 75) {
  grade = "B";
} else if (studentScore > 50) {
  grade = "C";
} else {
  grade = "D";
}
console.log(`Grade: ${grade}`);

// Step 5: Apply bonus or penalty using arithmetic operators
studentScore += 5; // Apply bonus of 5 points
console.log(`New Score (after bonus): ${studentScore}`);

// Step 6: Determine pass/fail using ternary operator
var result = studentScore >= 50 ? "Pass" : "Fail";
console.log(`Result: ${result}`);

// Step 7: Use switch-case to print a message based on the grade
switch (grade) {
  case "A":
    console.log("Excellent work!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("Needs improvement.");
    break;
  case "D":
    console.log("Fail. Try again.");
    break;
  default:
    console.log("No grade.");
}

// Step 8: Loop through multiple students (using a for loop)
const students = [
  { name: "John Doe", score: 85 },
  { name: "Jane Smith", score: 92 },
  { name: "Samuel Green", score: 45 }
];

for (var i = 0; i < students.length; i++) {
  console.log(`\nStudent ${i + 1}: ${students[i].name}`);
  var studentGrade = students[i].score > 90 ? "A" : students[i].score > 75 ? "B" : students[i].score > 50 ? "C" : "D";
  console.log(`Score: ${students[i].score}, Grade: ${studentGrade}`);
}