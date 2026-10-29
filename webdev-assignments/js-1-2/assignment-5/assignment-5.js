let year = prompt("Please insert a year:")

let leapYear = false;

if (year % 4 === 0){
    if ((year % 100 !== 0) || (year % 400 === 0)) {
        leapYear = true;
    }else {
        leapYear = false;
    }
} else {
    leapYear = false;
}

if (leapYear === true) {
document.querySelector("#target").innerHTML = `<h2>${year} is a leap year. </h2>`;
} else {
document.querySelector("#target").innerHTML = `<h2>${year} is not a leap year. </h2>`;
}
