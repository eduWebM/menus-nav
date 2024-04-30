export default function hamburgerMenuDoble (ham, navBar, submenuFlecha, inicioFlecha, flecha) {
    const d = document;
    const $nullFlecha = d.querySelectorAll(flecha);
    $nullFlecha.forEach((el) => {
        if(!el.classList.contains("submenu-flecha")) {
            el.classList.add("flecha-null");
        }
    });
    d.addEventListener("click", (e) => {
        // Botón Hamburguesa
        if(e.target.matches(ham)) {
            d.querySelector(ham).classList.toggle('rotar-y-blanquear');
            d.querySelector(ham).classList.toggle('bi-x-lg');
            d.querySelector(navBar).classList.toggle("activado");
        }

        // Botones Flecha
        if(e.target.matches(submenuFlecha)){
            const $padre = e.target.parentNode;
            $padre.nextElementSibling.classList.toggle("activado");
        }

        // Botón Inicio Flecha
        if(e.target.matches(inicioFlecha)) {
            const $panel = e.target.closest(".panel-submenu");
            $panel.classList.toggle("activado");
        }
    });
}