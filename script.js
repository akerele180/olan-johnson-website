const year = document.getElementById("cal");
const mobileClose = document.getElementById("close");
const mobileOpen = document.getElementById("open");
const mobileMenu = document.getElementById("mobile-menu");

let date = new Date();
let calYear = date.getUTCFullYear();

mobileOpen.addEventListener("click", () => {
  mobileClose.classList.toggle("hidden");
  mobileOpen.classList.toggle("hidden");
  mobileMenu.classList.toggle("-translate-x-full");
  document.getElementsByTagName("body")[0].classList.add("h-screen");
  document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
  document.getElementsByTagName("body")[0].classList.add("overflow-y-hidden");
});

mobileClose.addEventListener("click", () => {
  mobileOpen.classList.toggle("hidden");
  mobileClose.classList.toggle("hidden");
  mobileMenu.classList.toggle("-translate-x-full");
  document.getElementsByTagName("body")[0].classList.remove("h-screen");
  document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
  document
    .getElementsByTagName("body")[0]
    .classList.remove("overflow-y-hidden");
});

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

// $(function(){
//     $("#web-nav a").click(function(){
//       $("#web-nav a").removeClass("selected")
//       $(this).addClass("selected")
//       return false;
//     })
//   })

AOS.init();