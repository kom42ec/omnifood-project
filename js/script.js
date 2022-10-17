/////////////////////////////////////////////////////
// Create gradient effect on h1 element when we click on it

const h1 = document.querySelector(".heading-primary");

h1.addEventListener("click", function () {
  h1.style.backgroundImage = "linear-gradient(90deg, #1fb155, #22c55e)";
  h1.style.webkitBackgroundClip = "text";
  h1.style.webkitTextFillColor = "transparent";
});

//////////////////////////////////////////////////////
// Footer current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

//////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
