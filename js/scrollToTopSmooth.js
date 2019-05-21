let scrollToTopBtn = document.getElementById('scrollToTop');
scrollToTopBtn.addEventListener("click", scrollToTop, false);

// let timeOut;
// function scrollToTop(evt) {
// 	if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
// 		window.scrollBy(0, -50);
// 		timeOut = setTimeout('scrollToTop()', 10);
// 	} else {
//         clearTimeout(timeOut);
//     }
//     evt.preventDefault();
// }


function scrollToTop(evt) {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        requestAnimationFrame(scrollToTop);
    }
    evt.preventDefault();
}
