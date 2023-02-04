year = document.getElementById("cal");

let date = new Date();
let calYear = date.getUTCFullYear();

console.log(calYear);

year.innerHTML = calYear;
