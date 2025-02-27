const navbar = document.querySelector("nav");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "#18171a"; 
  } else {
    navbar.style.backgroundColor = "transparent"; 
  }
});

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active"); 
});

const arrows = document.querySelectorAll(".bx-chevron-down");
const menuItems = document.querySelectorAll(".nav-menu li");
const moreOptions = document.querySelectorAll(".more");

arrows.forEach((arrow) => {
  arrow.addEventListener("mouseenter", () => {
    arrow.style.transform = "rotate(180deg)";
  });

  arrow.addEventListener("mouseleave", () => {
    arrow.style.transform = "rotate(0deg)";
  });
});

menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("highlight");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("highlight");
  });
});

menuItems.forEach((item) => {
  const more = item.querySelector(".more");
  if (more) {
    item.addEventListener("mouseenter", () => {
      more.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
      more.style.display = "none";
    });
  }
});
