const navbar = document.querySelector('header');
let navbarHeight = navbar.offsetHeight;


function handleScroll() {
    // if (window.scrollY > 0) {
    //     navbar.style.transform = 'translateY(0)';
    //     document.querySelector('.plantHero2').classList.add('fadeIn')
    // } else {
    //     navbar.style.transform = 'translateY(-100%)';
    // }

}


// window.addEventListener('load', handleScroll);
setTimeout(() => {
        navbar.style.transform = 'translateY(0)';
        document.querySelector('.plantHero2').classList.add('fadeIn')


}, 300);


// Configuración del Intersection Observer
const observerOptions = {
    root: null, // Observa el viewport
    rootMargin: '0px',
    threshold: 0.2 // Activa cuando el 10% del elemento es visible
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