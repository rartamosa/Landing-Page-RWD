const hamburgerButtonOpen = document.querySelector(".hamburger_open");
const hamburgerButtonClose = document.querySelector(".hamburger_close");

hamburgerButtonOpen.addEventListener("click", () => {
  const navigation = document.querySelector(".navigation");

  navigation.classList.add("navigation_open");
});

hamburgerButtonClose.addEventListener("click", () => {
  const navigation = document.querySelector(".navigation");

  navigation.classList.remove("navigation_open");
});