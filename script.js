const x = document.getElementById("chk");
const navItems = document.querySelectorAll(".nav__item");

x.addEventListener("change", function () {
  if (x.checked) {
    navItems.forEach(function (item) {
      item.style.visibility = "visible";
    });
  }
});
