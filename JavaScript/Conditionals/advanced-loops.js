console.log("hello world");

/*(for...each) -> Used for arrays and calls a callback on each element in that array

const fruits = ["apple", "banana", "cherry", "orange", "grape"];

fruits.forEach(function (fruit) {
    console.log(fruit);
}); */

/* for ... of ( used for Arrays and iterable objects)

const numbers = ["yes", "no", "maybe"];

for (let num of numbers) {
    console.log(num);
} */

    /*for ... in ( Used for objects )*/

    const person ={
        name: "Colby",
        age: 23,
        city: "Freeport"
    };

    for(const key in person) {
        console.log("key in =", key);
        console.log(`person[${key}]value =`, person[key]);
    }