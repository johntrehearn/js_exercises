integer1 = parseInt(prompt("Please enter first integer"))
integer2 = parseInt(prompt("Please enter second integer"))
integer3 = parseInt(prompt("Please enter third integer"))

let sum = integer1 + integer2 + integer3;
let product = integer1 * integer2 * integer3;
let average = sum / 3;

document.querySelector("#target").innerHTML = `<p>Sum: ${sum}</p> <p>Product: ${product}</p> <p>Average: ${average}`;