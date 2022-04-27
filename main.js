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
btnCloseLightbox.addEventListener("click", () => {
    overlayLightbox.style.display = "none";
    slides = document.querySelectorAll(".carousel .carousel-item");
});

//lightbox carousel
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

// BASKET
const btnCart = document.getElementById("btn-cart");
const basket = document.getElementById("basket");

//open close basket
btnCart.addEventListener("click", () => {
    basket.classList.toggle("visible");
});

// changing cart load
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const itemCount = document.getElementById("item-count");
let cartLoad = 0;

btnPlus.addEventListener("click", () => {
    cartLoad++;
    itemCount.textContent = cartLoad;
});

btnMinus.addEventListener("click", () => {
    if (cartLoad <= 0) {
        cartLoad = 0;
    } else {
        cartLoad--;
    }

    itemCount.textContent = cartLoad;
});

// adding item to cart

const btnAddToCart = document.getElementById("btn-add-to-cart");
const basketMain = document.getElementById("basket-main");
const emptyBasket = document.getElementById("empty-basket");
const basketCount = document.getElementById("basket-count");
const price = parseInt(document.getElementById("price").textContent);
const totalPriceEl = document.getElementById("total-price");
const badge = document.getElementById("badge");

btnAddToCart.addEventListener("click", () => {
    renderCartContent();
});

function renderCartContent() {
    if (cartLoad > 0) {
        const totalPrice = (cartLoad * price).toFixed(2);

        basket.classList.add("visible");

        basketMain.style.display = "flex";
        emptyBasket.style.display = "none";
        basketCount.textContent = cartLoad;
        totalPriceEl.textContent = "$" + totalPrice;
        badge.style.display = "block";
        badge.textContent = cartLoad;
    } else {
        basketMain.style.display = "none";
        emptyBasket.style.display = "block";
        badge.style.display = "none";
    }
}

//removing item from cart

const btnDelete = document.getElementById("btn-delete");

btnDelete.addEventListener("click", () => {
    cartLoad = 0;
    renderCartContent();
});
