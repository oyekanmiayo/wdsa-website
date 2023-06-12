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
