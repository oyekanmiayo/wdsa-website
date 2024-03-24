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

// var join = document.getElementById("join-cohort");
// join.addEventListener("click", function () {
//   window.open("https://forms.gle/mXLRLAVggfByJWR17", "_blank");
// });

// var volunteer = document.getElementById("volunteer");
// volunteer.addEventListener("click", function () {
//   window.open("https://forms.gle/mXLRLAVggfByJWR17", "_blank");
// });

// var learn = document.getElementById("learn-more");
// learn.addEventListener("click", function () {
//   window.open("/schedule");
// });

// var read = document.getElementById("read-all");
// console.log(read);
// read.addEventListener("click", function () {
//   window.open("/testimonials");
// });

const accordion = document.getElementsByClassName("accordion");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    console.log("clicked");
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// document.addEventListener("DOMContentLoaded", function() {
//   var accordions = document.getElementsByClassName("accordion");
//   console.log("why isn't my accordion working???")
//   for (var i = 0; i < accordions.length; i++) {
//       accordions[i].addEventListener("click", function() {
//           this.classList.toggle("active");
//           var panel = this.nextElementSibling;
//           if (panel.style.maxHeight) {
//               panel.style.maxHeight = null;
//           } else {
//               panel.style.maxHeight = panel.scrollHeight + "px";
//           }
//       });
//   }
// });