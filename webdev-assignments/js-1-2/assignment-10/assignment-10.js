let startYear = parseInt(prompt("Please enter the start year:"));
let endYear = parseInt(prompt("Please enter the end year:"));

let year = startYear;

while (startYear <= endYear) {
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
        document.querySelector("#target").innerHTML += `<li>${year}</li>`;
    }
    startYear++;
    year++;
}


