const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const buttonBurgerMenu = document.querySelector('.buttonBurgerMenu');
const fullMenuHamburguerWithOverlay = document.querySelector('.fullMenuHamburguerWithOverlay');
const optionsNavbar = document.querySelector('.optionsNavbar');
const body = document.body;

let menuOnOff = false; // Estado del menú
let isAnimating = false; // Prevención de clics múltiples
const COOLDOWN_TIME = 500; // Tiempo de cooldown reducido a 500 ms

buttonBurgerMenu.addEventListener("click", () => {
    if (isAnimating) return; // Bloquea clics durante la animación

    isAnimating = true; // Bloquea hasta que termine la animación
    setTimeout(() => {
        isAnimating = false; // Permite nuevos clics después del cooldown
    }, COOLDOWN_TIME);

    if (!menuOnOff) {
        // Abrir el menú
        buttonBurgerMenu.style.backgroundImage = "url(../assets/svg/xIconMenu.svg)"; // Cambia al ícono de "cerrar"
        fullMenuHamburguerWithOverlay.style.opacity = "1";
        fullMenuHamburguerWithOverlay.style.visibility = "visible";
        optionsNavbar.style.transform = "translateY(0%)";

        body.style.overflow = "hidden"; // Bloquea el scroll
        menuOnOff = true;
    } else {
        // Cerrar el menú
        buttonBurgerMenu.style.backgroundImage = "url(../assets/svg/burgerMenu.svg)"; // Cambia al ícono de "hamburguesa"
        optionsNavbar.style.transform = "translateY(-100%)";
        fullMenuHamburguerWithOverlay.style.opacity = "0";
        fullMenuHamburguerWithOverlay.style.visibility = "hidden";

        body.style.overflow = "auto"; // Restaura el scroll
        menuOnOff = false;
    }
});









const popup = document.querySelector('.popupHomeEmailBackground');
const popupModal = document.querySelector('.popupHomeEmail');

const closePopup = document.querySelector('.btnCloseEmail');
const form = document.getElementById('emailSignupForm');
const emailInput = form.querySelector('input[name="email"]'); // Campo de email
const responseMessage = document.createElement('p'); // Mensaje de respuesta
form.appendChild(responseMessage); // Añadir el mensaje al formulario
let hasShownPopup = false; // Evita mostrar el pop-up varias veces

// Verificar si el pop-up debe aparecer
function shouldShowPopup() {
    const localStorageFlag = localStorage.getItem('popupDismissed');
    const sessionStorageFlag = sessionStorage.getItem('popupDismissed');
    return !localStorageFlag && !sessionStorageFlag;
}

// Mostrar el pop-up al llegar al 75% del scroll
window.addEventListener('scroll', () => {
    if (!shouldShowPopup() || hasShownPopup) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight * 0.75) {
        popup.style.display = "flex";
        setTimeout(() => {
            popup.classList.add('show');
            popupModal.classList.add('showModalTranslate')
            document.querySelectorAll('header, main, footer').forEach(el => el.classList.add('bluredOn'));
            document.body.style.overflow = "hidden";
            hasShownPopup = true;
        }, 100);
    }
});

// Cerrar el pop-up (botón "Cerrar")
closePopup.addEventListener('click', () => {
    popup.classList.remove('show');
    popupModal.classList.remove('showModalTranslate')
    document.querySelectorAll('header, main, footer').forEach(el => el.classList.remove('bluredOn'));
    document.body.style.overflow = "auto";

    popup.addEventListener("transitionend", () => {
        popup.style.display = "none";
    });


    sessionStorage.setItem('popupDismissed', true);
});


form.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const email = emailInput.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('ingresa algo valido down')
        return;
    }


    try {

        await new Promise((resolve) => setTimeout(resolve, 1000));
        // await fetch("/api/send-email", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({ email }),
        // });

        // si todo sale bien
        alert('recibimos tu email, pronto recibiras novedades')
        emailInput.value = ""; 


        popup.classList.remove('show');
        document.querySelectorAll('header, main, footer').forEach(el => el.classList.remove('bluredOn'));
        document.body.style.overflow = "auto";

        popup.addEventListener("transitionend", () => {
            popup.style.display = "none";
        });

        localStorage.setItem('popupDismissed', true);
    } catch (error) {

        // si todo sale mal
        alert("Hubo un problema al enviar el correo. Intenta nuevamente.");
    }
});
