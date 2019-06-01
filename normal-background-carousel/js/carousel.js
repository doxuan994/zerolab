let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {

    showSlides(slideIndex += n, n);
}

function currentSlide(n) {
    showSlidesDot(slideIndex = n);
}

function showSlidesDot(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[slideIndex-1].classList.remove('slideRight');
        slides[slideIndex-1].classList.remove('slideLeft');
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add('myZoomer');
}

function showSlides(n, isPrevorNext) {

    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

    for (i = 0; i < slides.length; i++) {
        slides[slideIndex-1].classList.remove('mySlideRight');
        slides[slideIndex-1].classList.remove('mySlideLeft');
        slides[slideIndex-1].classList.remove('myZoomer');
    }
    if (isPrevorNext == -1) {
        console.log("Click prev!");
        slides[slideIndex-1].classList.add('mySlideRight');
    } else if (isPrevorNext == 1) {
        console.log("Click next!");
        slides[slideIndex-1].classList.add('mySlideLeft');
    }
}
