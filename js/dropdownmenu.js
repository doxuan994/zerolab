let navLine = document.getElementById('navLine');
navLine.addEventListener('click', navLineTransform);


function navLineTransform() {

    let lines = document.getElementById('lines');
    lines.style.background = '#2a2a2a';




    if (lines.classList.contains('linesMobile')) {
        lines.classList.remove('linesMobile');
        lines.style.background = '#e7e7e7';
    } else {
        lines.classList.add('linesMobile');
    }


}
