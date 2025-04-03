const person = {
    //key: value,
    name: "Colby",
    age: 23,
    city: Freeport
};

console.log(person);

//.notation to access specific keys
console.log(person.name);
console.log(person["name"]); // equivalent just different syntax

// adding and updating properties
person.country = "USA";
console.log(person); //will add country to the person object

person.age = 30;
console.log(person); //this will update a property

delete person.city;
console.log(person) //this will remove specified property

// Looping though objects
for (const key in person) {
    console.log("Key =", key)
    console.log("value =", person[key]);
    // this helps show what the keys and values are
}