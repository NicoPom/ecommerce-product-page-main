// SIDE BAR MENU
const btnClose = document.getElementById("btn-close");
const btnMenu = document.getElementById("btn-menu");
const overlay = document.getElementById("overlay");
const sideNav = document.getElementById("side-nav");

btnMenu.addEventListener("click", () => {
    overlay.style.transform = "translateX(0%)";
    setTimeout(() => {
        sideNav.style.transform = "translateX(0%)";
    }, 50);
});
btnClose.addEventListener("click", () => {
    sideNav.style.transform = "translateX(-100%)";
    setTimeout(() => {
        overlay.style.transform = "translateX(-100%)";
    }, 300);
});

// CAROUSEL

let slides = document.querySelectorAll(".carousel .carousel-item");
const btnNext = document.querySelectorAll(".carousel-button-next");
const btnPrev = document.querySelectorAll(".carousel-button-prev");
let slidePosition = 0;
const totalSlides = slides.length;

btnNext.forEach((el) => {
    el.addEventListener("click", () => {
        moveToNextSlide();
    });
});

btnPrev.forEach((el) => {
    el.addEventListener("click", () => {
        moveToPrevSlide();
    });
});

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
}

//CAROUSEL LIST
const carouselListEl = document.querySelectorAll(".carousel-list-el");

carouselListEl.forEach((el) => {
    el.addEventListener("click", () => {
        hideAllSlides();
        slides[el.id].classList.add("carousel-item-visible");
        removeSelector();
        el.classList.add("selected");
    });
});

function removeSelector() {
    for (let el of carouselListEl) {
        el.classList.remove("selected");
    }
}

//LIGHTBOX
const btnCloseLightbox = document.getElementById("btn-close-lightbox");
const overlayLightbox = document.getElementById("overlay-lightbox");

//open and close lightbox

slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        if (window.innerWidth >= 900) {
            overlayLightbox.style.display = "grid";
            slides = document.querySelectorAll(
                ".carousel-lightbox .carousel-item"
            );
        }
    });
});

btnCloseLightbox.addEventListener("click", () => {
    overlayLightbox.style.display = "none";
    slides = document.querySelectorAll(".carousel .carousel-item");
});

//lightbox carousel

// BASKET
const btnCart = document.getElementById("btn-cart");
const basket = document.getElementById("basket");

btnCart.addEventListener("click", () => {
    basket.classList.toggle("visible");
});
