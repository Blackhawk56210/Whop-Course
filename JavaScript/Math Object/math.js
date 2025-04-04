console.log(Math.PI); //3.14
console.log(Math.E); // exponent

// Math.round -> rounds a number to the nearest integer
console.log("Math.round() ----- ")
console.log("Math.round(4.6)", Math.round(4.6)); //Output: 5
console.log("Math.round(4.3)", Math.round(4.3)); //Output: 4

// Math.floor -> Rounds down to the nearest integer
console.log("Math.floor() ----- ")
console.log("Math.floor(4.9)", Math.floor(4.9)); //Output: 4
console.log("Math.floor(4.1)", Math.floor(4.1)); //Output: 4

// Math.ceil -> rounds up to the nearest integer
console.log("Math.ceil() ----- ")
console.log("Math.ceil(4.1)", Math.ceil(4.1)); //Output: 5
console.log("Math.ceil(4.9)", Math.ceil(4.9)); //Output: 5

// Math.max and Math.min -> find the largest / smallest number
console.log("Math.max() ----- ")
console.log("Math.max(10, 20, 5, 40, 30)", Math.max(10, 20, 5, 40, 30)); //Output: 40
console.log("Math.min() ----- ");
console.log("Math.min(10, 20, 5, 40, 30)", Math.min(10, 20, 5, 40, 30)); //Output: 5

const nums  = [1, 4, 5, 10, 55, 32, 100];
console.log("Math.min(...nums)", Math.min(...nums));
console.log("Math.max(...nums)", Math.max(...nums));

// Math.abs() -> Gets the absolute value of a number
// converts negative numbers to a positive
console.log("Math.abs() ----- ")
console.log("Math.abs(-10)", Math.abs(-10));
console.log("Math.abs(-10)", Math.abs(10));

// Math.pow() -> Power of a number
console.log("Math.pow() ----- ");
console.log("Math.pow(2, 3)", Math.pow(2, 3)); //2 to the power of 3
console.log("Math.pow(5, 2)", Math.pow(5, 2)); //5 to the power of 2

console.log("2 ** 3", 2 ** 3);
console.log("5 ** 2", 5 ** 2);

// Math.sqrt() ------
console.log("Math.sqrt() ----- ");
console.log("Math.sqrt(25)", Math.sqrt(25)); //Output: 5
console.log("Math.sqrt(49)", Math.sqrt(49));

// check if a number is a perfect square
console.log("function to see if perfect square");
function isPerfectSquare(num) {
    if (Math.sqrt(num) % 1 === 0) return true
    return false
}

console.log("isPerfectSquare", isPerfectSquare(10));
console.log("isPerfectSquare", isPerfectSquare(16));
console.log("isPerfectSquare", isPerfectSquare(25));
console.log("isPerfectSquare", isPerfectSquare(13));
console.log("isPerfectSquare", isPerfectSquare(17));

