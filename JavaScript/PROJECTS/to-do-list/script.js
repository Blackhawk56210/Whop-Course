const tasks = []; //where to do items will be stored

while(true) {
    // asking for a user input
    let task = prompt("Enter a task (or type 'done to finish)");

    // check's if a user input is done, DONE or Done
    if  (task.toLowerCase() ==='done') {
        break; //if done breaks out of the loop
    }

    tasks.push(task); //adding user input to task
}

// To display tasks
console.log("Your to do list");
for (let i =0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`)
}

// tasks.forEach((task, index) => {
//     console.log(`${index + 1}. ${task}`)
// });