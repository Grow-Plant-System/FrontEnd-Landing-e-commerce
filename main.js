//audioAnimation
const totalFrames = 55;  // Número total de frames
const path = "assets/audioAnimationSVGs/audioAnimation";  // Ruta base
let currentFrame = 1;    // Frame actual
let isReversing = false; // Dirección de la animación
const img = document.getElementById("audioAnimation");

function animateBoomerang() {
    // Actualizar el src del SVG actual
    img.src = `${path}${String(currentFrame).padStart(4, '0')}.svg`;

    // Cambiar la dirección en los extremos
    if (!isReversing) {
        currentFrame++;
        if (currentFrame === totalFrames) isReversing = true;
    } else {
        currentFrame--;
        if (currentFrame === 1) isReversing = false;
    }

    // Llamar de nuevo a la función
    setTimeout(animateBoomerang, 100);  // Velocidad de animación
}

// Iniciar la animación
animateBoomerang();



//scroll del ver mas
document.querySelector(".secondaryButtonHero").addEventListener("click", () => {
    const section = document.querySelector(".listenGrowContainer");
    const headerHeight = (document.querySelector("header").offsetHeight) + (document.querySelector("header").offsetHeight /2); 
    console.log(headerHeight);
    // Altura del header
  
    // Desplazamiento personalizado
    window.scrollTo({
      top: section.offsetTop - headerHeight, // Ajusta según el header
      behavior: "smooth"
    });
  });
  

const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const buttonBurgerMenu = document.querySelector('.buttonBurgerMenu');
// const buttonBurgerMenuIcon = document.querySelector('.buttonBurgerMenu-icon');
const fullMenuHamburguerWithOverlay = document.querySelector('.fullMenuHamburguerWithOverlay');
const optionsNavbar = document.querySelector('.optionsNavbar');
const body = document.body;
const burgerButton = document.getElementById('burgerButton');

// Función de Toggle para abrir/cerrar el menú hamburguesa


let menuOnOff = false; // Estado del menú
let isAnimating = false; // Prevención de clics múltiples
const COOLDOWN_TIME = 500; // Tiempo de cooldown reducido a 500 ms

function openBurgerMenu(){
    burgerButton.classList.add('open');
    fullMenuHamburguerWithOverlay.style.opacity = "1";
    fullMenuHamburguerWithOverlay.style.visibility = "visible";
    optionsNavbar.style.transform = "translateY(0%)";

    body.style.overflow = "hidden"; // Bloquea el scroll
    menuOnOff = true;
}
function closeBurgerMenu(){
    burgerButton.classList.remove('open');
    optionsNavbar.style.transform = "translateY(-100%)";
    fullMenuHamburguerWithOverlay.style.opacity = "0";
    fullMenuHamburguerWithOverlay.style.visibility = "hidden";

    body.style.overflow = "hidden auto"; // Restaura el scroll
    menuOnOff = false;
}

function controlShowBurgerMenu(){
    if (isAnimating) return; // Bloquea clics durante la animación

    isAnimating = true; // Bloquea hasta que termine la animación
    setTimeout(() => {
        isAnimating = false; // Permite nuevos clics después del cooldown
    }, COOLDOWN_TIME);

    if (!menuOnOff) {
        openBurgerMenu()
    } else {
        closeBurgerMenu()
    }
}

buttonBurgerMenu.addEventListener("click", () => {
    controlShowBurgerMenu()
});




const popup = document.querySelector('.popupHomeEmailBackground');
const popupModal = document.querySelector('.popupHomeEmail');
const majorButtonHero = document.querySelector('.majorButtonHero');
const buttonOpenPopupEmail = document.querySelector('.buttonOpenPopupEmail');
const closePopup = document.querySelector('.btnCloseEmail');
const form = document.getElementById('emailSignupForm');
const emailInput = form.querySelector('input[name="email"]'); // Campo de email
const responseMessage = document.createElement('p'); // Mensaje de respuesta
let hasShownPopup = false; // Evita mostrar el pop-up varias veces

// Mostrar el pop-up
function showPopUpEmail(){
    if (hasShownPopup) return; // No mostrar el popup si ya se mostró

    popup.style.display = "flex";  // Asegura que el popup sea visible de inmediato

    // Esperar a que la animación se ejecute antes de agregar las clases para la animación
    setTimeout(() => {
        popup.classList.add('show');
        popupModal.classList.add('showModalTranslate');
        document.body.style.overflow = "hidden";  // Desactiva el scroll
        hasShownPopup = true;  // Marca que el popup ya se mostró
    }, 0);  // Añadir clases de animación de forma inmediata
}

// Mostrar el pop-up si toca el botón

majorButtonHero.addEventListener("click", () => {
    showPopUpEmail();
    
});
buttonOpenPopupEmail.addEventListener("click", () => {
    showPopUpEmail();
    
});

// Cerrar el pop-up (botón "Cerrar")
closePopup.addEventListener('click', () => {
    popup.classList.remove('show');
    popupModal.classList.remove('showModalTranslate');
    document.body.style.overflow = "auto";  // Restaura el scroll

    // Usar transitionend para asegurar que el display: none se aplique después de la animación
    popup.addEventListener("transitionend", () => {
        popup.style.display = "none";  // Oculta el popup al finalizar la animación
        hasShownPopup = false;  // Permite que el popup se muestre de nuevo
        emailInput.value = ""
    }, { once: true });  // Solo ejecutamos una vez el evento para evitar múltiples disparos
});






form.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const email = emailInput.value;

    // Validar el email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('DALE MEDIA PILA CULIA TANTO E CUESTA PONER @GMAIL.COM.');
        return;
    }

    try {
        // Hacer una solicitud al backend
        const response = await fetch("https://backend-landing-e-commerce-production.up.railway.app/api/emails", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });        

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const result = await response.json();

        // Mostrar un mensaje al usuario
        alert(result.message || 'Recibimos tu email, pronto recibirás novedades.');

        // Resetear el campo de entrada
        emailInput.value = ""; 

        // Ocultar el pop-up
        popup.classList.remove('show');
        document.body.style.overflow = "auto";

        popup.addEventListener("transitionend", () => {
            popup.style.display = "none";
        });

        localStorage.setItem('popupDismissed', true);
    } catch (error) {
        console.error('Error:', error);
        alert("Hubo un problema al enviar el correo. Intenta nuevamente.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const item = header.parentElement;
  
        // Cerrar otros acordeones abiertos
        document.querySelectorAll(".accordion-item").forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("open");
            otherItem.querySelector(".accordion-header").classList.remove("accordion-header-active");
          }
        });
  
        // Alternar la clase 'open' y 'accordion-header-active' del acordeón actual
        item.classList.toggle("open");
        header.classList.toggle("accordion-header-active");
      });
    });
  });
  

  
  
  





  

