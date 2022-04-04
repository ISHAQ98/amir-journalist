// ==============  Toggle style switcher =========

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// ==============  Theme colors =========

const alternateStayles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStayles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// ==============  Theme Light and Dark mode =========

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

// // ==============  Text Animation =========

// var typed = new Typed(".typing", {
//   strings: [" ", "Journalist", "Animatrice", "Broadcaster", "Influencer"],
//   typeSpeed: 100,
//   BackSpeed: 60,
//   loop: true,
// });

// // ==============  Text Animation =========

// const nav = document.querySelector(".nav"),
//   navList = nav.querySelectorAll("li"),
//   totalNavList = navList.length;
// for (let i = 0; i < totalNavList; i++) {
//   console.log(navList[i]);
// }
