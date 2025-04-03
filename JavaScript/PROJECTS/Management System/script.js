//  init students array
const students = [];

// add student
function addStudents(name, grade) {
    students.push( {
        name,
        grade,
    })
}

// remove student
function removeStudent(name) {
    const index = students.findIndex(students => students.name === name);
    if ( index !== -1) {
        students.splice(index, 1);
        console.log(name, "has been removed")
    } else {
        console.log(name, "was not found")
    }
}


// function to filter students
function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}

// function to map students in formatted list
function formatStudentList() {
    return students.map((student) => `${student.name} - Grade: ${student.grade}`);
}

// start
console.log("Students =", students);

// add students
addStudents("Alice", 45);
addStudents("Phil", 100);
addStudents("Minnie", 97);
addStudents("Shay",89);
addStudents("Jocelyn", 89);
addStudents("Colby", 70);
addStudents("Manny", 40);
addStudents("Jay", 55);
addStudents("David", 100);
addStudents("Mustaffa", 75);
addStudents("William", 80);

removeStudent();

console.log("Student List:");
console.log(formatStudentList());

console.log("Students with grade equal or higher to 80");
console.log(filterTopStudents(80));