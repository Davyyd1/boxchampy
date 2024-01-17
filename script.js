const x = document.getElementById("chk");
const navItems = document.querySelectorAll(".nav__item");

x.addEventListener("change", function () {
  if (x.checked === true && window.matchMedia("(max-width: 600)")) {
    navItems.forEach((item) => (item.style.visibility = "visible"));
  }
});
