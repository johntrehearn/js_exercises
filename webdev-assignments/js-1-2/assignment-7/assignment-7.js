let noOfDice = prompt("Please enter the number of dice:");
let sum = 0;

while (noOfDice > 0) {
    let diceNo = Math.floor(Math.random() * 6) + 1;
    sum += diceNo;
    noOfDice--;
}

document.querySelector("#target").innerHTML = `<h2>The sum of your dice rolls is ${sum}.</h2>`;

