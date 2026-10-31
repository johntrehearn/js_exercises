let checkNo = parseInt(prompt("Please enter the number to check:"));

let isPrime = false;

if (checkNo > 1) {
    isPrime = true;
    for (let i = 2; i < checkNo; i++) {
        if (checkNo % i === 0) {
            isPrime = false;
            break;
        } else{
            isPrime = true;
        }
    }
} else {
    isPrime = false;
}

if (isPrime === true) {
    document.querySelector("#target").innerHTML = `<h2>${checkNo} is a prime number. </h2>`;
} else {
    document.querySelector("#target").innerHTML = `<h2>${checkNo} is not a prime number. </h2>`;
}