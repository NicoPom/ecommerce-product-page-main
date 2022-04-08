// SIDE BAR MENU
const btnClose = document.getElementById("btn-close")
const btnMenu = document.getElementById("btn-menu")
const overlay = document.getElementById("overlay")
const sideNav = document.getElementById("side-nav")

btnMenu.addEventListener("click", ()=>{
    overlay.style.transform = "translateX(0%)";
    setTimeout(() => {
        sideNav.style.transform = "translateX(0%)";
    }, 50);
})
btnClose.addEventListener("click", ()=>{
    sideNav.style.transform = "translateX(-100%)";
    setTimeout(() => {
        overlay.style.transform = "translateX(-100%)";
    }, 300);
})

// CAROUSEL
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
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

// BASKET
const btnCart = document.getElementById("btn-cart")
const basket = document.getElementById("basket")

btnCart.addEventListener("click", ()=>{
    basket.classList.toggle("visible")
})
