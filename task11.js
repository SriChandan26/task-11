// VARIABLES + DATA TYPES + OPERATORS

// 1. Variables & Data Types
let name = "Sri Chandan";     // String
let age = 19;            // Number
let isStudent = true;    // Boolean

console.log("---- USER DETAILS ----");
console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);


// 2. Arithmetic Operators
let a = 10;
let b = 5;

console.log("\n---- ARITHMETIC OPERATORS ----");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);


// 3. Comparison Operators
console.log("\n---- COMPARISON OPERATORS ----");
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a == b:", a == b);
console.log("a != b:", a != b);


// 4. Logical Operators
let hasID = true;

console.log("\n---- LOGICAL OPERATORS ----");
console.log("Eligible (age >= 18 AND has ID):", age >= 18 && hasID);
console.log("Either condition true:", age < 18 || hasID);
console.log("Not having ID:", !hasID);


// 5. Extra (User Example)
let marks = 85;

console.log("\n---- RESULT CHECK ----");
console.log("Marks:", marks);

if (marks >= 50) {
    console.log("Result: PASS");
} else {
    console.log("Result: FAIL");
}
