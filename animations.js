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


// const navbar = document.querySelector('header');
// let navbarHeight = navbar.offsetHeight;

// // Función que maneja la visibilidad de la navbar
// function handleScroll() {
//     if (window.scrollY > 0) {
//         navbar.style.transform = 'translateY(0)';
//     } else {
//         navbar.style.transform = 'translateY(-100%)';
//     }
// }

// window.addEventListener('scroll', handleScroll);

// // Implementación del IntersectionObserver para animaciones al hacer scroll
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Agrega la clase de animación cuando el elemento entra en el viewport
//             entry.target.classList.add(entry.target.dataset.animation); 
//         }
//     });
// }, {
//     threshold: 0.1  // Umbral de visibilidad (cuando el 20% del elemento es visible)
// });

// // Selecciona todos los elementos que tienen el atributo data-animation
// document.querySelectorAll('[data-animation]').forEach(el => observer.observe(el));

// Configuración del Intersection Observer
const observerOptions = {
    root: null, // Observa el viewport
    rootMargin: '0px',
    threshold: 0.1 // Activa cuando el 10% del elemento es visible
};

// Manejo de intersección
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            // Agrega la clase que coincide con la animación especificada en el atributo data-animation
            const animationClass = el.dataset.animation;
            if (animationClass) {
                el.classList.add(animationClass);
                observer.unobserve(el); // Evita que se active nuevamente
            }
        }
    });
}

// Crear el observador
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Seleccionar todos los elementos con el atributo data-animation
document.querySelectorAll('[data-animation]').forEach(element => {
    element.style.opacity = 0; // Inicializa invisible
    observer.observe(element); // Observa cada elemento
});