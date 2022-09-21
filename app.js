const hamburgerButtonOpen = document.querySelector(".hamburger");
const hamburgerButtonClose = document.querySelector(".hamburger_close");
const body = document.querySelector("body");

hamburgerButtonOpen.addEventListener("click", () => {
  const navigation = document.querySelector(".navigation");

  body.style.overflow = "hidden";
  body.style.touchAction = "none";
  navigation.classList.add("navigation_open");
});

hamburgerButtonClose.addEventListener("click", () => {
  const navigation = document.querySelector(".navigation");

  body.style.overflow = "auto";
  body.style.touchAction = "auto";
  navigation.classList.remove("navigation_open");
});
