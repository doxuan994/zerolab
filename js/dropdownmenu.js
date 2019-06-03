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



// Show sub menu.
let siteNavLi = document.querySelectorAll('.siteNav > li');
for (let i = 0; i < siteNavLi.length; i++) {
    siteNavLi[i].addEventListener('click', showSubList);
}

function showSubList(evt) {
    let siteNav = document.getElementById('siteNav');
    let targetSiteNavLi = evt.srcElement;
    let targetSiteNavLiChildNodes = targetSiteNavLi.childNodes;
    let targetSubSiteNav;

    // has subSiteNav
    if (targetSiteNavLiChildNodes.length > 1) {
        for (let i = 0; i < targetSiteNavLiChildNodes.length; i++) {
            if (typeof targetSiteNavLiChildNodes[i].classList !== 'undefined') {
                if (targetSiteNavLiChildNodes[i].classList.contains('sub-siteNav')) {
                    targetSubSiteNav = targetSiteNavLiChildNodes[i];
                }
            }
        }
    }

    if (typeof siteNav !== 'undefined' && typeof targetSubSiteNav !== 'undefined') {
        siteNav.classList.add('hide-site-nav');
        targetSubSiteNav.classList.add('show-site-nav-kids');
    }
}



// Hide sub menu.
let mobileHeading = document.querySelectorAll('.mobile-heading');
for (let i = 0; i < mobileHeading.length; i++) {
    mobileHeading[i].addEventListener('click', hideSubList);
}

function hideSubList(evt) {
    let siteNav = document.getElementById('siteNav');
    let subSiteNav = evt.srcElement.parentElement;
    let targetSiteNavLi = subSiteNav.parentElement;
    siteNav.classList.remove('hide-site-nav');
    subSiteNav.classList.remove('show-site-nav-kids');
}
