year = document.getElementById("cal");

let date = new Date();
let calYear = date.getUTCFullYear();

year.innerHTML = calYear;

const hamburger = document.getElementById("open");
const cancel = document.getElementById("close");
const list = document.getElementById("linksmobile");

hamburger.addEventListener("click", mobileMenu);
cancel.addEventListener("click", closeMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  cancel.classList.toggle("active");
  list.classList.toggle("active");
}
function closeMenu() {
  cancel.classList.remove("active");
  hamburger.classList.remove("active");
  list.classList.remove("active");
}
