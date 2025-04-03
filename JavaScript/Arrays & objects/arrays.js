// Array -> a special variable that stores multiple values in a single variable

/*
const fruits = ["apple", "banana", "grape", "cherry", "pineapple"];

console.log(fruits); //expected output: ["apple", "banana", "grape", "cherry", "pineapple"];

// accessing the array element
console.log([0]); //expected output: ["apple"]
console.log([3]); //expected output: ["cherry"]
*/


// Modify array values directly

/*
fruits([1]) = "blueberry" //this changes the array index

console.log(fruits); //["apple", "blueberry", "grape", "cherry", "pineapple"]

console.log(fruits.length);//output 5
*/

// Declaring and Manipulating Arrays
/*
const fruits = ["apple", "banana", "grape", "cherry", "pineapple"];
console.log(fruits); //expected output: ["apple", "banana", "grape", "cherry", "pineapple"];

// push -> adds a new element to the end of the array
fruits.push("Mango"); 
console.log(fruits); //expected output: ["apple", "banana", "grape", "cherry", "pineapple", "Mango"];

// pop -> removes the last element in an array
fruits.pop(); 
console.log(fruits); //expected output: ["apple", "banana", "grape", "cherry", "pineapple"];

// shift -> removes the first element of the array
fruits.shift();
console.log(fruits); //expected output: ["banana", "grape", "cherry", "pineapple"];

//Unshift -> adds an element to the start of an array
fruits.unshift("Mango"); 
console.log(fruits); 

// Splice -> add/remove elements
fruits.splice(1, 1, "Peach");
console.log(fruits); //expected output: ["apple", "Peach", "grape", "cherry", "pineapple"];

fruits.splice(1, 2);
console.log(fruits); //expected output: ["apple", "Peach", "pineapple"];
*/

//map -> creates a new array by applying a function to each element or callback to each element

const numbers = [1, 2, 3, 4, 5];
console.log("Number =", numbers);

const doubled = numbers.map(num => num * 2);
console.log('doubled =', doubled); //Expected output: [2, 4, 6, 8, 10];


// filter -> creates an array with elements that match a condition
const evenNumber = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); //Expected output: [2, 4];