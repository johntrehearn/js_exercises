let continueCal = confirm("Should I calculate the square root?");

if (continueCal) {
    let number = prompt("Please insert a number:");

    if (number < 0) {
        document.querySelector("#target").innerHTML = `<h2>The square root of a negative number is not defined.</h2>`;
    } else {
        let sqRoot = Math.sqrt(number);
        document.querySelector("#target").innerHTML = `<h2>The square root of ${number} is ${sqRoot}.</h2>`;
    } 

    } else {
        document.querySelector("#target").innerHTML = `<h2>The square root is not calculated.</h2>`;
    }
