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
    slides[slideIndex-1].classList.add('zoomer');
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
        slides[i].classList.remove('oldSlideLeft');
        slides[i].classList.remove('newSlideLeft');
        slides[i].classList.remove('oldSlideRight');
        slides[i].classList.remove('newSlideRight');
        slides[i].classList.remove('zoomer');
    }
    if (isPrevorNext == -1) {
        console.log("Click prev!");


    } else if (isPrevorNext == 1) {
        console.log("Click next!");

        // 2
        // 3
        // 1
        if (slideIndex == 2) {
            slides[slideIndex-2].classList.add('oldSlideLeft');
            slides[slideIndex-1].classList.add('newSlideLeft');
        } else if (slideIndex == 3) {
            slides[slideIndex-2].classList.add('oldSlideLeft');
            slides[slideIndex-1].classList.add('newSlideLeft');

        } else if (slideIndex == 1) {
            slides[slideIndex+1].classList.add('oldSlideLeft');
            slides[slideIndex-1].classList.add('newSlideLeft');
        }

    }
}
