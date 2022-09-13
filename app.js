const hamburgerButtonOpen = document.querySelector(".hamburger_open");
const hamburgerButtonClose = document.querySelector(".hamburger_close");
const body = document.querySelector("body");

hamburgerButtonOpen.addEventListener("click", () => {
  const navigation = document.querySelector(".navigation");

  body.style.overflow = "hidden";
  navigation.classList.add("navigation_open");
});

hamburgerButtonClose.addEventListener("click", () => {
  const navigation = document.querySelector(".navigation");

  body.style.overflow = "auto";
  navigation.classList.remove("navigation_open");
});
