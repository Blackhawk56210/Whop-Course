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

//keyword ->)while (condition ->)(userInput !== "yes") 
// (What it does code block ->){
//     userInput = prompt("Type 'yes' to continue");
// }

// console.log("You entered 'yes'")

// do ... while (Executes at least once)
// they are dangerous if you remove your implementation 0 will never change and you'll be stuck in an infinite loop
// it executes once before checking the condition

// let number = 0;

// do {
//      console.log("number =", number);
//      number++
// } while (number <= 5);

let num = 0;

do {
     num = prompt("Enter a number greater than 10:");
} while(num <= 10)

     console.log("Thank You.");