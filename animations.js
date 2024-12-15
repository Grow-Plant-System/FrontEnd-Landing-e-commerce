const navbar = document.querySelector('header');
let navbarHeight = navbar.offsetHeight


// Función que maneja la visibilidad de la `navbar`
function handleScroll() {
    if (window.scrollY > 0) {
        // Muestra la `navbar` cuando se ha desplazado hacia abajo
        navbar.style.transform = 'translateY(0)';
        ScrollReveal().reveal('.plantHero2', {
            reset: false, // Hace que se reinicie al salir del viewport
            beforeReveal: (el) => {
                el.classList.add('fadeIn'); // Clase que activa la animación de entrada
                el.classList.remove('fadeOut'); // Quita la animación de salida si existía
            }
        });
    } else {
        // Oculta la `navbar` cuando está en la parte superior de la página
        navbar.style.transform = 'translateY(-100%)';
    }
}

// Escuchar el evento `scroll` para manejar la visibilidad de la `navbar`
window.addEventListener('scroll', handleScroll);


ScrollReveal().reveal('.titleHero', {
    reset: false,  // Asegura que la animación se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('focusIn');
        el.classList.remove('focusOut');
    }
});

ScrollReveal().reveal('.subtitleHero', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('swingIn'); // Clase que activa la animación de entrada
        el.classList.remove('swingOut'); // Quita la animación de salida si existía
    }
});


ScrollReveal().reveal('.separatorHero', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('scaleInSeparator'); // Clase que activa la animación de entrada
        el.classList.remove('scaleOutSeparator'); // Quita la animación de salida si existía
    }
});

ScrollReveal().reveal('.majorButtonHero', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('fadeIn'); // Clase que activa la animación de entrada
        el.classList.remove('fadeOut'); // Quita la animación de salida si existía
    }
});
ScrollReveal().reveal('.secondaryButtonHero', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('fadeIn'); // Clase que activa la animación de entrada
        el.classList.remove('fadeOut'); // Quita la animación de salida si existía
    }
});

// listenGrow section
//--Title and Subtitle
ScrollReveal().reveal('.title-listenGrowContent', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('slideInNotBlur'); // Clase que activa la animación de entrada
        el.classList.remove('slideOutNotBlur'); // Quita la animación de salida si existía
    }
});

ScrollReveal().reveal('.subtitle-listenGrowContent', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('slideInNotBlur'); // Clase que activa la animación de entrada
        el.classList.remove('slideOutNotBlur'); // Quita la animación de salida si existía
    }
});

//----cardParameter
ScrollReveal().reveal('.cardParameter', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('showIn'); // Clase que activa la animación de entrada
        el.classList.remove('showOut'); // Quita la animación de salida si existía
    }
});

//step section
ScrollReveal().reveal('.step-content-span', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('scaleInVerTop'); // Clase que activa la animación de entrada
        el.classList.remove('scaleOutVerTop'); // Quita la animación de salida si existía
    }
});

ScrollReveal().reveal('.step-number', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('showIn'); // Clase que activa la animación de entrada
        el.classList.remove('showOut'); // Quita la animación de salida si existía
    }
});
ScrollReveal().reveal('.step-title', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('slideInRight'); // Clase que activa la animación de entrada
        el.classList.remove('slideOutRight'); // Quita la animación de salida si existía
    }
});

ScrollReveal().reveal('.subtitleHero', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('swingIn'); // Clase que activa la animación de entrada
        el.classList.remove('swingOut'); // Quita la animación de salida si existía
    }
});
ScrollReveal().reveal('.step-text', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('swingIn'); // Clase que activa la animación de entrada
        el.classList.remove('swingOut'); // Quita la animación de salida si existía
    }
});
ScrollReveal().reveal('.steps-title', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('focusIn'); // Clase que activa la animación de entrada
        el.classList.remove('focusOut'); // Quita la animación de salida si existía
    }
});

//boton abrir popup de nuevo
ScrollReveal().reveal('.againPopUpEmailFinal-text', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('focusIn'); // Clase que activa la animación de entrada
        el.classList.remove('focusOut'); // Quita la animación de salida si existía
    }
});
ScrollReveal().reveal('.buttonOpenPopupEmail', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('showIn'); // Clase que activa la animación de entrada
        el.classList.remove('showOut'); // Quita la animación de salida si existía
    }
});
ScrollReveal().reveal('.FAQSection-title', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('swingIn'); // Clase que activa la animación de entrada
        el.classList.remove('swingOut'); // Quita la animación de salida si existía
    }
});
ScrollReveal().reveal('.accordion', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('slideInNotBlur'); // Clase que activa la animación de entrada
        el.classList.remove('slideOutNotBlur'); // Quita la animación de salida si existía
    }
});
ScrollReveal().reveal('.plantHero1', {
    reset: false, // Hace que se reinicie al salir del viewport

    beforeReveal: (el) => {
        el.classList.add('fadeIn'); // Clase que activa la animación de entrada
        el.classList.remove('fadeOut'); // Quita la animación de salida si existía
    }
});
