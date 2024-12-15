const navbar = document.querySelector('header');
let navbarHeight = navbar.offsetHeight
console.log(navbarHeight);

// Función que maneja la visibilidad de la `navbar`
function handleScroll() {
    if (window.scrollY > 0) {
        // Muestra la `navbar` cuando se ha desplazado hacia abajo
        navbar.style.transform = 'translateY(0)';
    } else {
        // Oculta la `navbar` cuando está en la parte superior de la página
        navbar.style.transform = 'translateY(-100%)';
    }
}

// Escuchar el evento `scroll` para manejar la visibilidad de la `navbar`
window.addEventListener('scroll', handleScroll);



// ScrollReveal().reveal('.titleHero', {
//     distance: '150px',  
//     // duration: 800,
//     // delay: 100,
//     origin: 'bottom',
//     offset: navbarHeight,
//     reset: true, // Ajusta el valor según el tamaño del viewport
//     // Hace que se reinicie al salir del viewport
//     beforeReveal: (el) => {
//         el.classList.add('focusIn'); // Clase que activa la animación de entrada
//         el.classList.remove('focusOut'); // Quita la animación de salida si existía
//     },
//     beforeReset: (el) => {
//         el.classList.add('focusOut'); // Clase que activa la animación de salida
//         el.classList.remove('focusIn'); // Quita la animación de entrada si existía
//     },
//     afterReset:(el)=>{
//         el.style.animationDelay = '100ms';
//     }
// });
ScrollReveal().reveal('.titleHero', {
    reset: true,  // Asegura que la animación se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('focusIn');
        el.classList.remove('focusOut');
    },
    beforeReset: (el) => {
        el.classList.add('focusOut');
        el.classList.remove('focusIn');
    },
    afterReset: (el) => {
        el.style.animationDelay = '100ms';  // Ajustamos el delay si es necesario
    }
});

ScrollReveal().reveal('.subtitleHero', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('swingIn'); // Clase que activa la animación de entrada
        el.classList.remove('swingOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('swingOut'); // Clase que activa la animación de salida
        el.classList.remove('swingIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '400ms';
    }
});


ScrollReveal().reveal('.separatorHero', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('scaleInSeparator'); // Clase que activa la animación de entrada
        el.classList.remove('scaleOutSeparator'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('scaleOutSeparator'); // Clase que activa la animación de salida
        el.classList.remove('scaleInSeparator'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '100ms';
    }
});

ScrollReveal().reveal('.majorButtonHero', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('fadeIn'); // Clase que activa la animación de entrada
        el.classList.remove('fadeOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('fadeOut'); // Clase que activa la animación de salida
        el.classList.remove('fadeIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '100ms';
    }
});
ScrollReveal().reveal('.secondaryButtonHero', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('fadeIn'); // Clase que activa la animación de entrada
        el.classList.remove('fadeOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('fadeOut'); // Clase que activa la animación de salida
        el.classList.remove('fadeIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '100ms';
    }
});

// listenGrow section
//--Title and Subtitle
ScrollReveal().reveal('.title-listenGrowContent', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('slideInNotBlur'); // Clase que activa la animación de entrada
        el.classList.remove('slideOutNotBlur'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('slideOutNotBlur'); // Clase que activa la animación de salida
        el.classList.remove('slideInNotBlur'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '100ms';
    }
});

ScrollReveal().reveal('.subtitle-listenGrowContent', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('slideInNotBlur'); // Clase que activa la animación de entrada
        el.classList.remove('slideOutNotBlur'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('slideOutNotBlur'); // Clase que activa la animación de salida
        el.classList.remove('slideInNotBlur'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '100ms';
    }
});

//----cardParameter
ScrollReveal().reveal('.cardParameter', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('showIn'); // Clase que activa la animación de entrada
        el.classList.remove('showOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('showOut'); // Clase que activa la animación de salida
        el.classList.remove('showIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '100ms';
    }
});

//step section
ScrollReveal().reveal('.step-content-span', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('scaleInVerTop'); // Clase que activa la animación de entrada
        el.classList.remove('scaleOutVerTop'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('scaleOutVerTop'); // Clase que activa la animación de salida
        el.classList.remove('scaleInVerTop'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '100ms';
    }
});

ScrollReveal().reveal('.step-number', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('showIn'); // Clase que activa la animación de entrada
        el.classList.remove('showOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('showOut'); // Clase que activa la animación de salida
        el.classList.remove('showIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '100ms';
    }
});
ScrollReveal().reveal('.step-title', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('slideInRight'); // Clase que activa la animación de entrada
        el.classList.remove('slideOutRight'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('slideOutRight'); // Clase que activa la animación de salida
        el.classList.remove('slideInRight'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '100ms';
    }
});

ScrollReveal().reveal('.subtitleHero', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('swingIn'); // Clase que activa la animación de entrada
        el.classList.remove('swingOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('swingOut'); // Clase que activa la animación de salida
        el.classList.remove('swingIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '400ms';
    }
});
ScrollReveal().reveal('.step-text', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('swingIn'); // Clase que activa la animación de entrada
        el.classList.remove('swingOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('swingOut'); // Clase que activa la animación de salida
        el.classList.remove('swingIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '400ms';
    }
});
ScrollReveal().reveal('.steps-title', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('focusIn'); // Clase que activa la animación de entrada
        el.classList.remove('focusOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('focusOut'); // Clase que activa la animación de salida
        el.classList.remove('focusIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '400ms';
    }
});

//boton abrir popup de nuevo
ScrollReveal().reveal('.againPopUpEmailFinal-text', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('focusIn'); // Clase que activa la animación de entrada
        el.classList.remove('focusOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('focusOut'); // Clase que activa la animación de salida
        el.classList.remove('focusIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '400ms';
    }
});
ScrollReveal().reveal('.buttonOpenPopupEmail', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('showIn'); // Clase que activa la animación de entrada
        el.classList.remove('showOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('showOut'); // Clase que activa la animación de salida
        el.classList.remove('showIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '400ms';
    }
});
ScrollReveal().reveal('.FAQSection-title', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('swingIn'); // Clase que activa la animación de entrada
        el.classList.remove('swingOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('swingOut'); // Clase que activa la animación de salida
        el.classList.remove('swingIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '400ms';
    }
});
ScrollReveal().reveal('.accordion', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('slideInNotBlur'); // Clase que activa la animación de entrada
        el.classList.remove('slideOutNotBlur'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('slideOutNotBlur'); // Clase que activa la animación de salida
        el.classList.remove('slideInNotBlur'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '400ms';
    }
});
ScrollReveal().reveal('.plantHero1', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('fadeIn'); // Clase que activa la animación de entrada
        el.classList.remove('fadeOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('fadeOut'); // Clase que activa la animación de salida
        el.classList.remove('fadeIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '0ms';
    }
});
ScrollReveal().reveal('.plantHero2', {
    reset: true, // Hace que se reinicie al salir del viewport
    viewOffset: {
        top: navbarHeight // Ajusta el límite superior por la altura del header
    },
    beforeReveal: (el) => {
        el.classList.add('fadeIn'); // Clase que activa la animación de entrada
        el.classList.remove('fadeOut'); // Quita la animación de salida si existía
    },
    beforeReset: (el) => {
        el.classList.add('fadeOut'); // Clase que activa la animación de salida
        el.classList.remove('fadeIn'); // Quita la animación de entrada si existía

    },
    afterReset:(el)=>{
        el.style.animationDelay = '0ms';
    }
});