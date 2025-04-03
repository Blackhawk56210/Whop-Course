function calculateAvg (score1, score2, score3) {
    return (score1 + score2 + score3) / 3
}

function assignGrade(calculateAvg) {
    if (calculateAvg >= 90) {
    return "A";
    } else if (calculateAvg >= 80) {
    return "B";
    } else if (calculateAvg >= 70) {
    return "C";
    } else if (calculateAvg >= 60) {
    return "D";
    } else if (calculateAvg >= 50) {
    return "F";
 }
}

// User Input

// const score1 = parseFloat(prompt("Enter first score: "));
// const score2 = parseFloat(prompt("Enter second score: "));
// const score3 = parseFloat(prompt("Enter third score: "));

const scores= []

for (let i = 0; i < 3; i++) {
    const score = prompt(`Enter Score: ${i + 1}`)
    scores.push(parseInt(score))
}

const average = calculateAvg(...scores);
const grade = assignGrade(average);

console.log(`Average Grade: ${average}`);
console.log(`Final Grade: ${grade}`);