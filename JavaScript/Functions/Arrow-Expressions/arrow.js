// Function expression or arrow function -> store a function inside a variable

const greet = function (name) {
    return `Hello ${name}`;
};

console.log(greet("alice")); //without the parameter it returns an anonymous function


// Arrow Functions ( shorter syntax )

const square = (num) => num**2; //one-line does'nt require curly brackets 
console.log(square(5)); // Output: 25

//() => {}
const multiply = (a, b) => { 
    return a * b; //must have return if it's not on one line
};

console.log(multiply(3, 5)); //Output 15