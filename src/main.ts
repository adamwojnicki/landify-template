// STYLE IMPORTS
import "./style.css";

// MOBILE MENU FUCNTIONALITY:
const mobileBtn: HTMLButtonElement = document.querySelector(".mobile-btn")!;
const mobileNav: HTMLMenuElement = document.querySelector(".mobile-nav")!;

mobileBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

// ACTIVE NAV LINKS
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const activeItem = document.querySelector(".nav-item.active")!;
    activeItem.classList.remove("active");
    item.classList.add("active");
  });
});

// CLOSE MOBILE MENU AFTER CLICKING A LINK
const mobileLinks: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
  });
});
