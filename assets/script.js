/* =========================================
   HERO SLIDER
========================================= */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");

const nextButton = document.querySelector(".slider-next");
const previousButton = document.querySelector(".slider-prev");

let currentSlide = 0;
let sliderTimer;


/* SHOW SLIDE */

function showSlide(index) {

    if (slides.length === 0) {
        return;
    }

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


/* NEXT */

function nextSlide() {

    showSlide(currentSlide + 1);

}


/* PREVIOUS */

function previousSlide() {

    showSlide(currentSlide - 1);

}


/* START AUTOMATIC SLIDER */

function startSlider() {

    if (slides.length <= 1) {
        return;
    }

    sliderTimer = setInterval(
        nextSlide,
        5000
    );

}


/* RESET SLIDER TIMER */

function resetSlider() {

    clearInterval(sliderTimer);

    startSlider();

}


/* NEXT BUTTON */

if (nextButton) {

    nextButton.addEventListener("click", function() {

        nextSlide();

        resetSlider();

    });

}


/* PREVIOUS BUTTON */

if (previousButton) {

    previousButton.addEventListener("click", function() {

        previousSlide();

        resetSlider();

    });

}


/* DOTS */

dots.forEach(function(dot, index) {

    dot.addEventListener("click", function() {

        showSlide(index);

        resetSlider();

    });

});


/* INITIALIZE */

showSlide(0);

startSlider();


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


if (menuToggle && nav) {

    menuToggle.addEventListener("click", function() {

        nav.classList.toggle("open");

    });


    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            nav.classList.remove("open");

        });

    });

}
