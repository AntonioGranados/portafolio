// Mostrar y ocultar Menu
const navMenu = document.querySelector('#nav-menu');
const toggleMenu = document.querySelector('#nav-toggle');
const closeMenu = document.querySelector('#nav-close');

// Mostrar
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Ocultar
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

// Remover Menu
const navLink = document.querySelectorAll('.nav__link');

// Funcion para cerrar el menu al hacer click en un link
function linkAction() {
    navMenu.classList.remove('show');
}

//Recorremos cada link del menu y al hacer click en uno, el menu se cerrará
navLink.forEach(item => item.addEventListener('click', linkAction));

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(actual => {
        const sectionHeight = actual.offsetHeight;
        const sectionTop = actual.offsetTop - 50;
        sectionId = actual.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active');
        }
    });
}