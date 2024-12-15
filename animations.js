// const navbar = document.querySelector('header');
// let navbarHeight = navbar.offsetHeight;


// function handleScroll() {
//     if (window.scrollY > 0) {
//         navbar.style.transform = 'translateY(0)';
//     } else {
//         navbar.style.transform = 'translateY(-100%)';
//     }
// }


// window.addEventListener('scroll', handleScroll);

// const commonRevealOptions = {
//     reset: false, 
// };


// const animations = [
    // { selector: '.subtitleHero, .step-text, .FAQSection-title', className: 'swingIn' },

// ];

// animations.forEach(animation => {
//     ScrollReveal().reveal(animation.selector, {
//         ...commonRevealOptions,
//         beforeReveal: (el) => {
//             el.classList.add(animation.className);
//         },
//         beforeReset: (el) => {
//             // para el pop ap
//             if (animation.selector.includes('againPopUpEmailFinal-text')) {
//                 el.classList.remove('focusOut');
//             }
//         }
//     });
// });


const navbar = document.querySelector('header');
let navbarHeight = navbar.offsetHeight;

// Función que maneja la visibilidad de la navbar
function handleScroll() {
    if (window.scrollY > 0) {
        navbar.style.transform = 'translateY(0)';
    } else {
        navbar.style.transform = 'translateY(-100%)';
    }
}

window.addEventListener('scroll', handleScroll);

// Implementación del IntersectionObserver para animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agrega la clase de animación cuando el elemento entra en el viewport
            entry.target.classList.add(entry.target.dataset.animation); 
        }
    });
}, {
    threshold: 0.5  // Umbral de visibilidad (cuando el 20% del elemento es visible)
});

// Selecciona todos los elementos que tienen el atributo data-animation
document.querySelectorAll('[data-animation]').forEach(el => observer.observe(el));
