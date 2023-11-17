const $ = (selector) => document.querySelector(selector);
const  navbarEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const mobileMenu = $('.mobile-menu') ;
const bugerMenu = $('.menu');
const menuCarritoIcon = $(".navbar-shopping-cart");
const aside = $('.product-detail');
const cardsContainer = $('.cards-container');


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

// Clase 22 lista de productos: HTML a partir de arrays

const producList = [];

producList.push({
    name: 'bike',
    price: 120 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
producList.push({
    name: 'Tv',
    price: 420 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
producList.push({
    name: 'Jacket',
    price: 120 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
producList.push({
    name: 'Book',
    price: 120 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
producList.push({
    name: 'Jacket',
    price: 120 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
producList.push({
    name: 'Book',
    price: 120 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
// for(product in producList){
//     console.log(product); //nos da el indice
// }



function renderProducts(arr){
    for(product of arr){//nos da el elemento del array
        const productCard =  document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
      
        const productInfo =  document.createElement('div');
        productInfo.classList.add('product-info');
        const divInfo =  document.createElement('div');
      
        const productPrice =  document.createElement('p');
        productPrice.innerText='$' +product.price;
        const productName =  document.createElement('p');
        productName.innerText=product.name;
      
      //metemos los elementos del div
      divInfo.append(productPrice, productName);
      
      
        //figure
        const productInfoFigure =  document.createElement('figure');
        const productImgCart =  document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
      
      
      //metemos los elementos de figure
          productInfoFigure.appendChild(productImgCart);
      //Metemos los div yfigure dentro de nuestro product-info
      
        productInfo.append(divInfo, productInfoFigure);
      
      //metemos todos los elementos dentro del contenedor de product card
      productCard.append(productImg, productInfo);
      
      cardsContainer.appendChild(productCard);
      
      
      }
}

renderProducts(producList);