console.log("hello");

// Loops repeat a block of code multiple times

// for loop used when the number of iterations is known

// Examples
/*for (let i = 0; i <=5; i++) {
     console.log("Iteration:", i);
} -> will stop at 6 since it wont be true anymore

const color = ["red", "green", "blue", "yellow"];

for (let i = 0; i < color.length; i++) {     
  console.log("i = 11");
  console.log("colors[i] =", color[i]);
}*/



// while loops -> use when the number of iterations is unknown.

/* Examples
let count = 0;

while (count <= 5) {
     console.log("count =", count);
     count++;
};
*/

// User input until correct answer
let userInput;

while (userInput !== "yes") {
    userInput = prompt("Type 'yes' to continue");
}

console.log("You entered 'yes'")