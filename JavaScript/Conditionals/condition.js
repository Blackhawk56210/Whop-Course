console.log("hello world!");
/*
 Conditional Statements (if, else, if else);
 Loops (for, while, do...while);
 Advanced Loops(forEach, for...of, for...in);
*/

// if statement -> executes a block of code if the condition is true

let temp = 90;

if (temp > 80) {
    console.log("it's hot......like hella hot");
}

// const isWeekend = false;

// if (isWeekend) {
//     console.log("Enjoy your weekend");
// } else {
//     console.log("Time to work");
// }

// if...else...else

// const marks = 85

// if (marks >= 90) {
//     console.log("A+");
// } else if (marks >= 80) {
//     console.log("B+");
// } else if (marks >= 70) {
//     console.log("C");
// } else if (marks >= 60) {
//     console.log("D");
// } else if (marls >= 50) {
//     console.log("F");
// }


// checking for multiple conditions with ( and and -> &&, or or -> || )
// const age = 20;
// const hasLicense = true;

// if (age >= 18 || hasLicense) {
//     console.log("You can drive");
// } else {
//     console.log("Walk home");
// }

// Ternary Operator (short had for if...else)
const isLoggedIn = false;

const msg = isLoggedIn ? "Welcome back!" : "Who are you??"
console.log(msg);