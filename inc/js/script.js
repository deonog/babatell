const menu = document.querySelector(".links-container");
const menuBtn = document.getElementById("menu-btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.getElementById("menu-close-btn");
const spanAll = document.querySelectorAll("#menu-btn span");
const span = document.querySelector("#menu-btn span:first-child");
const spanTwo = document.querySelector("#menu-btn span:nth-child(2)");
const spanThree = document.querySelector("#menu-btn span:last-child");
const nav = document.querySelector("nav");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelectorAll("nav a");
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const header = document.querySelector("header");
const hover = document.querySelector(".links-container a:hover");

// ------------------------------------------------------------------------------ //
// Menu Button
// ------------------------------------------------------------------------------ //

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("menu-open");
  overlay.classList.toggle("overlay-visible");
  span.classList.toggle("menu-btn-open");
  spanTwo.classList.toggle("menu-btn-open-2");
  spanThree.classList.toggle("menu-close");
});

// ------------------------------------------------------------------------------ //
// Dynamic Copyright Date
// ------------------------------------------------------------------------------ //

$(document).ready(function () {
  const dateElement = document.getElementById("copyright-date");

  function updateDate() {
    const date = new Date().getFullYear();
    dateElement.innerHTML = date;
  }

  // setup back to top link
  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 300) {
      topLink.classList.add("show-link");
    } else {
      topLink.classList.remove("show-link");
    }
  });
});
