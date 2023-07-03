const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  sidebarClose = document.querySelector(".sidebarClose");

// script to toggle sidebar
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

var join = document.getElementById("join-cohort");
join.addEventListener("click", function () {
  window.open("https://forms.gle/mXLRLAVggfByJWR17", "_blank");
});

var volunteer = document.getElementById("volunteer");
volunteer.addEventListener("click", function () {
  window.open("https://forms.gle/mXLRLAVggfByJWR17", "_blank");
});

var volunteer = document.getElementById("read-all");
volunteer.addEventListener("click", function () {
  window.open("/testimonials");
});
