let noDice = parseInt(prompt("Please enter the number of dice:"));
let numProb = parseInt(prompt("Please enter the result you want the probability for:"));
let rollTotal = 0;
let totalCorrect = 0;

for (let i = 1; i <= 10000; i++) {
    rollTotal = 0;

    for (let j = 1; j <= noDice; j++) {
        rollTotal += Math.floor(Math.random() * 6) + 1;
    }
    if (rollTotal === numProb) {
        totalCorrect++;
    }
}

let percentCorrect = parseFloat((totalCorrect / 10000) * 100).toFixed(2);

document.querySelector("#target").innerHTML = `<h2>Probability to get sum ${numProb} with ${noDice} dice is ${percentCorrect}%</h2>`;
