// Show/Hide sideNav on click Hamburger button.
// Hamburger button transform on click.

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

    let siteNav = document.getElementById('siteNav');
    siteNav.classList.toggle('displayBlock');


    
}


// Reset drop down menu when users open sub menu at the mobile but not close
// and they resize to bigger screen.
// a window.resize call back funtion.
function resetDropdownMenu() {
    let windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 992) {

        let siteNavLi = document.querySelectorAll('.siteNav > li');
        for (let i = 0; i < siteNavLi.length; i++) {
            if (siteNavLi[i].classList.contains('hide-site-nav')) {
                siteNavLi[i].classList.remove('hide-site-nav')
            }
        }


        let subSiteNav = document.querySelectorAll('.sub-siteNav');
        for (let i = 0; i < subSiteNav.length; i++) {
            if (subSiteNav[i].classList.contains('show-site-nav-kids')) {
                subSiteNav[i].classList.remove('show-site-nav-kids');
            }
        }
    }
}



// Debouncing.
// Function will only be called once the resizing is “complete.”
let timeOut = false;
window.addEventListener('resize', function() {
    // Clear the time out.
    clearTimeout(timeOut);

    // Start timing for event "completion".
    timeOut = setTimeout(resetDropdownMenu, 250);
});


















// Show sub menu.
let siteNavLi = document.querySelectorAll('.siteNav > li');
for (let i = 0; i < siteNavLi.length; i++) {
    siteNavLi[i].addEventListener('click', showSubList);
}

function showSubList(evt) {
    let siteNav = evt.srcElement;
    let siteNavChildNodes = siteNav.childNodes;

    let subSiteNav;


    // has subSiteNav
    if (siteNavChildNodes.length > 1) {
        for (let i = 0; i < siteNavChildNodes.length; i++) {
            if (typeof siteNavChildNodes[i].classList !== 'undefined') {
                if (siteNavChildNodes[i].classList.contains('sub-siteNav')) {
                    subSiteNav = siteNavChildNodes[i];
                }
            }
        }
    }

    if (typeof siteNav !== 'undefined' && typeof subSiteNav !== 'undefined') {
        siteNav.classList.add('hide-site-nav');
        subSiteNav.classList.add('show-site-nav-kids');
    }
}






// Hide sub menu.
let mobileHeading = document.querySelectorAll('.mobile-heading');
for (let i = 0; i < mobileHeading.length; i++) {
    mobileHeading[i].addEventListener('click', hideSubList);
}

function hideSubList(evt) {
    let subSiteNav = evt.srcElement.parentElement;
    let siteNav = subSiteNav.parentElement;


    siteNav.classList.remove('hide-site-nav');
    subSiteNav.classList.remove('show-site-nav-kids');
}
