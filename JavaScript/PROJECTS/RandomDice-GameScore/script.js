const scoreTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
};

// roll dice function get random number 1 - 6
function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    scoreTracker[roll]++; //increase count of rolled number
    console.log(`🎲 You rolled a ${roll}`);
}

function displayScores() {
    console.log(`Dice rolled score tracker`);
    for (const roll in scoreTracker) {
        console.log(`${roll}: ${scoreTracker[roll]} times`);
    }
}

// simulating dice rolls
for (let i = 0; i < 6; i++) {
    rollDice();
}

displayScores();