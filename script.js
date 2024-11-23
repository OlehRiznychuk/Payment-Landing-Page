const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnSvg = document.querySelector(".toggle-btn svg");
const dropDownMenu = document.querySelector(".dropdown-menu");
const menuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

toggleBtn.addEventListener("click", function () {
  dropDownMenu.classList.toggle("open");

  const isOpen = dropDownMenu.classList.contains("open");

  menuBtn.classList.toggle("hidden", isOpen);
  closeMenuBtn.classList.toggle("hidden", !isOpen);
});

document.addEventListener("click", function (event) {
  if (
    !dropDownMenu.contains(event.target) &&
    !toggleBtn.contains(event.target)
  ) {
    dropDownMenu.classList.remove("open");
    menuBtn.classList.remove("hidden");
    closeMenuBtn.classList.add("hidden");
  }
});
