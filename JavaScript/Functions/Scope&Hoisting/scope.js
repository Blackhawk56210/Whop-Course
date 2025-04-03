// Function Scope and Hoisting

// local vs global variables
// Global -> variables are available everywhere
// local -> ONLY exist inside of a function

/*
let globalVar ="I am Global";

function testScope() {
    let localVar = "I only exist in this function"
    console.log(globalVar); //Works because it is declared outside of the function
    console.log(localVar); //Works 
}

testScope()
console.log(globalVar); //Works
console.log(localVar); //Error it is outside of its defined scope
*/

// Function Declarations -> hoisted and can be called before definition

hello();

function hello() {
    console.log("Hello from a function declaration");
}

//

greet();

const greet = function() {
    console.log("Hello from a function expression");
}