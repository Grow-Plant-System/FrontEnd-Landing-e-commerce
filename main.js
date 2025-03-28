function setScreenHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

window.addEventListener('resize', setScreenHeight);
setScreenHeight();

//ocultar hero antes del load:
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".heroContainer");
    if (hero) {
      hero.style.opacity = "1";
      hero.style.visibility = "visible";
    }
  });
  

  
function scrollFromTo(seccionDestino){ //boton se pasa con ".pepito" si es clase y "#pepito" si es id 
//scroll del ver mas

        const section = document.querySelector(seccionDestino);
        const headerHeight = (document.querySelector("header").offsetHeight) + (document.querySelector("header").offsetHeight /2); 
        // Altura del header
    
        // Desplazamiento personalizado
        window.scrollTo({
        top: section.offsetTop - headerHeight, // Ajusta según el header
        behavior: "smooth"
        
    });
}



const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const buttonBurgerMenu = document.querySelector('.buttonBurgerMenu');
// const buttonBurgerMenuIcon = document.querySelector('.buttonBurgerMenu-icon');
const fullMenuHamburguerWithOverlay = document.querySelector('.fullMenuHamburguerWithOverlay');
const optionsNavbar = document.querySelector('.optionsNavbar');
const body = document.body;
const burgerButton = document.getElementById('burgerButton');
const buttonBurgerMenuIcon = document.querySelector('.buttonBurgerMenu-icon');
const buyButtonMenu = document.getElementById('buyButtonMenu');
const buttonPrecios = document.getElementById('buttonPrecios');
const buttonPorQueGrow = document.getElementById('buttonPorQueGrow');
const buttonFAQ = document.getElementById('buttonFAQ');
const navbarButtonComoFunciona = document.querySelector('.navbarButtonComoFunciona');
const navbarButtonFAQ = document.querySelector('.navbarButtonFAQ');



// Función de Toggle para abrir/cerrar el menú hamburguesa


let menuOnOff = false; // Estado del menú
let isAnimating = false; // Prevención de clics múltiples
const COOLDOWN_TIME = 500; // Tiempo de cooldown reducido a 500 ms

function openBurgerMenu(){
    burgerButton.classList.add('open');
    fullMenuHamburguerWithOverlay.style.opacity = "1";
    fullMenuHamburguerWithOverlay.style.visibility = "visible";
    optionsNavbar.style.transform = "translateY(0%)";
    header.style.background ="rgba(252, 245, 219, 1)"
    buttonBurgerMenuIcon.style.backgroundImage = "url(../assets/svg/closeMenu.svg)"
    body.style.overflow = "hidden"; // Bloquea el scroll
    menuOnOff = true;
}
function closeBurgerMenu(){
    burgerButton.classList.remove('open');
    optionsNavbar.style.transform = "translateY(-100%)";
    fullMenuHamburguerWithOverlay.style.opacity = "0";
    fullMenuHamburguerWithOverlay.style.visibility = "hidden";
    header.style.background ="rgba(252, 245, 219, 0.71)"
    buttonBurgerMenuIcon.style.backgroundImage = "url(../assets/svg/hamburguerMenu.svg)"


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

function darkenColor(hexColor, percentage) {
    // Asegúrate de que el color esté en el formato correcto
    if (hexColor.startsWith("#")) hexColor = hexColor.slice(1);

    // Convierte el color hexadecimal en valores RGB
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);

    // Calcula el nuevo valor reduciendo cada componente RGB
    const darken = (value) => Math.max(0, Math.min(255, value - (value * percentage / 100)));

    const newR = Math.round(darken(r)).toString(16).padStart(2, '0');
    const newG = Math.round(darken(g)).toString(16).padStart(2, '0');
    const newB = Math.round(darken(b)).toString(16).padStart(2, '0');

    // Combina los valores RGB en un nuevo color hexadecimal
    return `#${newR}${newG}${newB}`;
}

let canShowToast = true; // Variable para controlar si se puede mostrar un toast

function alertCustomize(texto, gravedad = "bottom", relleno) {
    if (!canShowToast) return; // Si no se permite, no crea un nuevo toast

    canShowToast = false; // Bloquea nuevos toasts hasta que termine el actual

    Toastify({
        text: texto,
        duration: 3000, // Duración del toast
        newWindow: true,
        gravity: gravedad,
        position: "center",
        stopOnFocus: true,
        style: {
            borderRadius: "15px",
            paddingBlock: "2vh",
            fontSize: "14px",
            background: relleno,
            color: "#FCF5DB",
            border: `solid 1px ${darkenColor(relleno, 25)}`
        },
        onClick: function() {}
    }).showToast();

    // Habilita nuevamente la creación de toasts después de 3000ms (duración del toast)
    setTimeout(() => {
        canShowToast = true;
    }, 3000);
}

buttonPorQueGrow.addEventListener("click", ()=>{
    controlShowBurgerMenu()
    scrollFromTo(".listenGrowContainer")

})
navbarButtonComoFunciona.addEventListener("click", ()=>{

    scrollFromTo(".listenGrowContainer")

})
buttonFAQ.addEventListener("click", ()=>{
    controlShowBurgerMenu()
    scrollFromTo(".FAQSection")

})
navbarButtonFAQ.addEventListener("click", ()=>{

    scrollFromTo(".FAQSection")

})


buttonBurgerMenu.addEventListener("click", () => {
    controlShowBurgerMenu()
});
// buttonPrecios.addEventListener("click",()=>{
//     alertCustomize("No disponible por el momento!", "bottom", "#601A1A")
// })

const popup = document.querySelector('.popupHomeEmailBackground');
const popupModal = document.querySelector('.popupHomeEmail');
const majorButtonHero = document.querySelector('.majorButtonHero');
const navbarButtonPreventa = document.querySelector('.navbarButtonPreventa');
const buttonOpenPopupEmail = document.querySelector('.buttonOpenPopupEmail');
const wsDesktop = document.querySelector('.wsDesktop');
const wsMobile = document.querySelector('.wsMobile');
const communityButton = document.querySelector('.communityButton');
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


// let ejecutado = false;

// window.addEventListener('scroll', function() {
//     // Calculamos el porcentaje de scroll
//     const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;

//     // Si el scroll es mayor o igual al 50% y la función no se ha ejecutado
//     if (scrollPercentage >= 0.7 && !ejecutado) {
//         // Llama a la función
//         showPopUpEmail();
        
//         // Establece la bandera para indicar que la función ya se ejecutó
//         ejecutado = true;
//     }
// });


majorButtonHero.addEventListener("click", () => {
    showPopUpEmail();
    
});
wsDesktop.addEventListener("click", () => {
    showPopUpEmail();
    
});
navbarButtonPreventa.addEventListener("click", () => {
    showPopUpEmail();
    
});
wsMobile.addEventListener("click", () => {
    showPopUpEmail();
    
});
communityButton.addEventListener("click", () => {
    showPopUpEmail();
    
});

buyButtonMenu.addEventListener("click",()=>{
    controlShowBurgerMenu()
    showPopUpEmail();
})



// Cerrar el pop-up (botón "Cerrar")
function closePopupFunction() {
    popup.classList.remove('show');
    popupModal.classList.remove('showModalTranslate');
    document.body.style.overflow = "auto";  
    document.body.style.overflowX = "hidden";

    popup.addEventListener("transitionend", () => {
        popup.style.display = "none";  
        hasShownPopup = false;  
        emailInput.value = "";
    }, { once: true });
}

// Evento para cerrar con el botón de cerrar
closePopup.addEventListener('click', closePopupFunction);

let btnSubmitEmail = document.querySelector('.btnSubmitEmail'); // Usar la referencia del botón fuera del evento

// Evento para cerrar después del submit
form.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const email = emailInput.value;
    
    // Deshabilitar el botón
    btnSubmitEmail.disabled = true;
    btnSubmitEmail.style.pointerEvents = 'none';
    btnSubmitEmail.innerHTML = 'Cargando...';
    btnSubmitEmail.classList.add('loading');

    // Validar el email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alertCustomize("Por favor, ingresa un email válido.", "bottom","#601A1A" );

        btnSubmitEmail.disabled = false;
        btnSubmitEmail.style.pointerEvents = 'auto';
        btnSubmitEmail.innerHTML = 'Enviar';

        return;
    }

    try {
        const response = await fetch("https://backend-landing-e-commerce-production.up.railway.app/api/emails", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });        

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        alertCustomize("Recibido! Pronto tendrás novedades.", "bottom","#2C503A" );
        emailInput.value = ""; 

        // Usar la función para cerrar correctamente el pop-up
        closePopupFunction();

        localStorage.setItem('popupDismissed', true);
    } catch (error) {
        console.error('Error:', error);
        alertCustomize("Algo salió mal, intenta nuevamente.", "bottom","#601A1A" );
    } finally {
        btnSubmitEmail.disabled = false;
        btnSubmitEmail.style.pointerEvents = 'auto';
        btnSubmitEmail.innerHTML = 'Enviar';
        btnSubmitEmail.classList.remove('loading');
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

  
  




  

