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
  
  
  // Get the current path of the page
const currentPath = window.location.pathname;

// Get all navigation links
const navLinks = document.querySelectorAll(".nav-links li a");

// Loop through each navigation link
navLinks.forEach(link => {
  // console.log(link.getAttribute('href')+"/", currentPath)
  // Check if the link's href matches the current path
  if (link.getAttribute('href')+"/" === currentPath) {
    console.log("here")
    // Add the 'active' class to the link if it matches the current path
    link.classList.add('active');
  } else {
    // Remove the 'active' class from the link if it doesn't match the current path
    link.classList.remove('active');
  }
});