/* =========================================
   HERO SLIDER
========================================= */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");

const previousButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

let currentSlide = 0;
let sliderInterval;


/* -----------------------------------------
   Show Slide
----------------------------------------- */

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }


    slides.forEach((slide, index) => {

        slide.classList.toggle(
            "active",
            index === currentSlide
        );

    });


    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentSlide
        );

    });

}


/* -----------------------------------------
   Next Slide
----------------------------------------- */

function nextSlide() {

    showSlide(currentSlide + 1);

}


/* -----------------------------------------
   Previous Slide
----------------------------------------- */

function previousSlide() {

    showSlide(currentSlide - 1);

}


/* -----------------------------------------
   Automatic Slider
----------------------------------------- */

function startSlider() {

    sliderInterval = setInterval(
        nextSlide,
        5000
    );

}


/* -----------------------------------------
   Reset Timer
----------------------------------------- */

function resetSlider() {

    clearInterval(sliderInterval);

    startSlider();

}


/* -----------------------------------------
   Next Button
----------------------------------------- */

if (nextButton) {

    nextButton.addEventListener("click", () => {

        nextSlide();

        resetSlider();

    });

}


/* -----------------------------------------
   Previous Button
----------------------------------------- */

if (previousButton) {

    previousButton.addEventListener("click", () => {

        previousSlide();

        resetSlider();

    });

}


/* -----------------------------------------
   Slider Dots
----------------------------------------- */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

        resetSlider();

    });

});


/* -----------------------------------------
   Start
----------------------------------------- */

showSlide(0);

startSlider();


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("open");

    });


    /* Close menu after clicking a link */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

        });

    });

}
