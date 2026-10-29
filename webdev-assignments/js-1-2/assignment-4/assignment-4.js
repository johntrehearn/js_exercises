name = prompt("Please insert your name:")

let choice = Math.floor(Math.random() * 4) + 1

console.log(choice)

let house;

if (choice === 1) {
    house = "Gryffindor";
} else if (choice === 2) {
    house = "Slytherin";
} else if (choice === 3) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}

document.querySelector("#target").innerHTML = `<h2>${name}, you are ${house}. </h2>`;
