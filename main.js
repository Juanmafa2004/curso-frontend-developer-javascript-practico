const  navbarEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu')

navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive');
}