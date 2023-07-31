// menu


const navbar = document.querySelector('.navbar');
const button = document.querySelector('.button');


let isNavbarExpanded = false;


function toggleNavbar() {
  if (isNavbarExpanded) {

    navbar.style.height = '0';
    navbar.style.width = '0';
  } else {

    navbar.style.height = '100vh';
    navbar.style.width = '100vw';
  }

  isNavbarExpanded = !isNavbarExpanded;
}


button.addEventListener('click', toggleNavbar);
