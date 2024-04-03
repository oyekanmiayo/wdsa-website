const body = document.querySelector("body");
const nav = document.querySelector("nav");
const sidebarOpen = document.querySelector(".sidebarOpen");
const sidebarClose = document.querySelector(".sidebarClose");

sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElement = e.target;
  if (
    !clickedElement.classList.contains("sidebarOpen") &&
    !clickedElement.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

const navigation = document.querySelector(".menu");
const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-links li a");
navLinks.forEach((link) => {
  // Check if the link's href matches the current path
  if (link.getAttribute("href") + "/" === currentPath) {
    console.log("here");
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
