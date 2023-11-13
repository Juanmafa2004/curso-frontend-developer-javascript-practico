const $ = (selector) => document.querySelector(selector);
const  navbarEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const mobileMenu = $('.mobile-menu') ;
const bugerMenu = $('.menu');
const menuCarritoIcon = $(".navbar-shopping-cart");
const aside = $('.product-detail');

navbarEmail.addEventListener('click', toggleMenu);
bugerMenu.addEventListener('click', toggleMenu);
menuCarritoIcon.addEventListener('click', toggleCarroAside);
/* function toggleDesktopMenu(){
//     desktopMenu.classList.toggle('inactive');
// }

// function toggleMobileMenu(){

/ }*/

function toggleMenu(event) {
    if (event.srcElement.className === 'menu') {
        const isAsideClosed = aside.classList.contains('inactive');
        if(!isAsideClosed){
            aside.classList.add('inactive');
            }
        mobileMenu.classList.toggle('inactive');
    } 
    else if (event.srcElement.className === 'navbar-email') {
        const isAsideClosed = aside.classList.contains('inactive');
        if(!isAsideClosed){
            aside.classList.add('inactive');
            }
        desktopMenu.classList.toggle('inactive');
    }
}

function toggleCarroAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    // aside.classList.toggle('inactive');
     if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
        }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
        }

     aside.classList.toggle('inactive');
    
}


