//Implement Hamburger Menu
const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");

navToggleIcon.addEventListener("click", function () {
  navToggleIcon.classList.toggle("nav__toggle-icon--open");
  menu.classList.toggle("menu--open");
  cover.classList.toggle("cover--show");
});

//Slider
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
