console.log("hello world");

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number")

// typeof -> tells you what its is ex. string, number etc.
console.log(num1, num2);
num1 = parseFloat(num1);
num2 = parseFloat(num2);

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);