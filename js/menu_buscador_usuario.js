export default function hamburgerMenuBuscador (menuIcons, ham, userIcons, search, navBar, submenuFlecha, inicioFlecha, flecha) {
    const d = document;
    const $nullFlecha = d.querySelectorAll(flecha);
    $nullFlecha.forEach((el) => {
        if(!el.classList.contains("submenu-flecha")) {
            el.classList.add("flecha-null");
        }
    });

    // Función para mover el elemento
    const moverElemento = () => {
        d.querySelector(menuIcons).insertBefore(d.querySelector(search), d.querySelector(userIcons));
    }
    
    // Verificar la resolución de pantalla y mover el elemento si es al menos 1024px
    function verificarYMover() {
        console.log(window.innerWidth);
        if (window.innerWidth >= 1100) {
            moverElemento();
        }
    }
    
    // Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
    window.onload = verificarYMover;
    window.onresize = verificarYMover;

    d.addEventListener("click", (e) => {
        // Botón Hamburguesa
        if(e.target.matches(ham)) {
            d.querySelector(userIcons).classList.toggle('mobile-active');
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