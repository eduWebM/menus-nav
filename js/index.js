import hamburgerMenuDoble from "./menu_doble.js";
import hamburgerMenuSimple from "./menu_simple.js";
import hamburgerMenuDobleClick from "./menu_doble_click.js";
import hamburgerMenuBuscador from "./menu_buscador_usuario.js";
/*const $ham = document.querySelector('.ham');
const $enlacesNav = document.querySelector('.nav-bar');*/

// Botón Hamburguesa
/*$ham.addEventListener('click', () => {
    $enlacesNav.classList.toggle('activado');
    $ham.classList.toggle('rotar');
    $ham.classList.toggle('blanquear');
    // Escuchar el evento de transición
    $ham.addEventListener('transitionend', function() {
        // Eliminar la clase que realiza la transformación
        $ham.classList.remove('rotar');
    
        // Aplicar la clase de Bootstrap u otra clase deseada
        $ham.classList.toggle('bi-x-lg');
    }, { once: true });
});*/

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    const path = window.location.pathname;
    // Extraer el nombre del archivo de la ruta
    const filename = path.split('/').pop();
    let nomFilename = "";
    console.log('Nombre del archivo HTML actual:', filename);
    nomFilename = filename.split('.')[0];
    console.log('Nombre del archivo sin extensión:', nomFilename);
    switch(nomFilename){
        case 'menu_simple':
            hamburgerMenuSimple(".ham", ".nav-bar");
            break;
        case 'menu_doble':
            hamburgerMenuDoble(".ham", ".nav-bar", ".submenu-flecha", ".inicio-flecha", ".flecha");
            break;
        case 'menu_doble_click':
            hamburgerMenuDobleClick(".ham", ".nav-bar", ".submenu-flecha", ".inicio-flecha", ".flecha");
            break;
        case 'menu_buscador_usuario':
            hamburgerMenuBuscador(".menu-icons", ".ham", ".user-cart-icons", ".search", ".nav-bar", ".submenu-flecha", ".inicio-flecha", ".flecha");
            break;
    }
});

