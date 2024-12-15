const navbar = document.querySelector('header');
let navbarHeight = navbar.offsetHeight;

// Función que maneja la visibilidad de la `navbar`
function handleScroll() {
    if (window.scrollY > 0) {
        navbar.style.transform = 'translateY(0)';
    } else {
        navbar.style.transform = 'translateY(-100%)';
    }
}

// Escuchar el evento `scroll` para manejar la visibilidad de la `navbar`
window.addEventListener('scroll', handleScroll);

const commonRevealOptions = {
    reset: false, // Asegura que la animación se reinicie al salir del viewport
};

// Animaciones agrupadas por tipo
const animations = [
    { selector: '.subtitleHero, .step-text, .FAQSection-title', className: 'swingIn' },
    { selector: '.separatorHero', className: 'scaleInSeparator' },
    { selector: '.majorButtonHero, .secondaryButtonHero', className: 'fadeIn' },
    { selector: '.title-listenGrowContent, .subtitle-listenGrowContent, .accordion', className: 'slideInNotBlur' },
    { selector: '.step-number, .cardParameter, .buttonOpenPopupEmail', className: 'showIn' },
    { selector: '.step-content-span', className: 'scaleInVerTop' },
    { selector: '.step-title, .steps-title, .againPopUpEmailFinal-text, .titleHero', className: 'focusIn' },
    { selector: '.step-title', className: 'slideInRight' },  // Asegurado que el step-title tenga la animación correcta
    { selector: '.plantHero1, .plantHero2', className: 'fadeIn' }, // Animación para los héroes de planta
];

// Aplicar las animaciones a todos los elementos seleccionados
animations.forEach(animation => {
    ScrollReveal().reveal(animation.selector, {
        ...commonRevealOptions,
        beforeReveal: (el) => {
            el.classList.add(animation.className);
        },
        beforeReset: (el) => {
            // Para el popup y algunos botones, quitamos las animaciones de salida si existían
            if (animation.selector.includes('againPopUpEmailFinal-text')) {
                el.classList.remove('focusOut');
            }
        }
    });
});
