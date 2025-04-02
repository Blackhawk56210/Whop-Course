//  Function -> a block of re-useable code that performs a task when called

function /*function name ->*/greet() {
    console.log("functions");
}

greet(); //calling the function



function greetUser(/*parameter ->*/name) {
    console.log(`Hello, ${name}!`);
}

greetUser("Alice"); //passing the parameter to the callback
greetUser(); //this will return undefined because the parameter is not passed

