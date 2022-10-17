// Creating gradient effect on h1 element when we click on it

const h1 = document.querySelector(".heading-primary");

h1.addEventListener("click", function () {
  h1.style.backgroundImage = "linear-gradient(90deg, #1fb155, #22c55e)";
  h1.style.webkitBackgroundClip = "text";
  h1.style.webkitTextFillColor = "transparent";
});
