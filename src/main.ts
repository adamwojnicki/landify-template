import "./style.css";

// MOBILE MENU FUCNTIONALITY:
const mobileBtn: HTMLButtonElement = document.querySelector(".mobile-btn")!;
const mobileNav: HTMLMenuElement = document.querySelector(".mobile-nav")!;

mobileBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});
