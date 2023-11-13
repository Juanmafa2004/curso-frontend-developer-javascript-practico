const $ = (selector) => document.querySelector(selector);
const  navbarEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const mobileMenu = $('.mobile-menu') ;
const bugerMenu = $('.menu');
navbarEmail.addEventListener('click', toggleMenu);
bugerMenu.addEventListener('click', toggleMenu);

/* function toggleDesktopMenu(){
//     desktopMenu.classList.toggle('inactive');
// }

// function toggleMobileMenu(){

/ }*/

function toggleMenu(event) {
    if (event.srcElement.className === 'menu') {
        mobileMenu.classList.toggle('inactive');
    } else if (event.srcElement.className === 'navbar-email') {
        desktopMenu.classList.toggle('inactive');
    }
}
