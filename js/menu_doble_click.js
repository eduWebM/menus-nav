export default function hamburgerMenuDobleClick (ham, navBar, submenuFlecha, inicioFlecha, flecha) {
    const d = document;
    const anchoViewport = window.innerWidth;
    const $nullFlecha = d.querySelectorAll(flecha);
    $nullFlecha.forEach((el) => {
        if(!el.classList.contains("submenu-flecha")) {   
            el.classList.add("flecha-null");
        }
    });
    d.addEventListener("click", (e) => {
        const $flechas = d.querySelectorAll(flecha);
        let valor = 0;

        // Botón Hamburguesa
        if(e.target.matches(ham)) {
            d.querySelector(ham).classList.toggle('rotar-y-blanquear');
            d.querySelector(ham).classList.toggle('bi-x-lg');
            d.querySelector(navBar).classList.toggle("activado");
        }

        // Botón Inicio Flecha
        if(e.target.matches(inicioFlecha)) {
            const $panel = e.target.closest(".panel-submenu");
            $panel.classList.toggle("activado");
        }

        // Botones Flecha
        if(e.target.matches(submenuFlecha)){
            const $padre = e.target.parentNode; // '<a>'
            if(anchoViewport < 1100) // dispositivos móviles
                $padre.nextElementSibling.classList.toggle("activado");
            else{ // ordenadores
                valor = e.target.getAttribute("data-active");
                if(valor === "0"){
                    e.target.setAttribute("data-active", "1");
                } else {
                    e.target.setAttribute("data-active", "0");
                }       
                e.target.classList.toggle("rotar-flecha");
                $padre.classList.toggle("link-active");
                $padre.nextElementSibling.classList.toggle("activado-desktop");
            }          
        } else { // Se ha hecho click en culquier parte de la página
            $flechas.forEach((el) => {
                valor = el.getAttribute("data-active");
                const $padreComun = el.parentNode; // <a>
                if(valor === "1"){ // si encuentro alguna 'flecha' activa, reinicio todo a sus valores originales ocultando el panel   
                    $padreComun.classList.remove("link-active");
                    $padreComun.nextElementSibling.classList.remove("activado-desktop");
                    el.classList.remove("rotar-flecha");
                    el.setAttribute("data-active", "0");
                } 
            });
        } 
    });
}