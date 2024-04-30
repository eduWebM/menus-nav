export default function hamburgerMenuSimple (ham, navBar) {
    const d = document;
    d.addEventListener("click", (e) => {
        if(e.target.matches(ham)) {
            d.querySelector(ham).classList.toggle('rotar-y-blanquear');
            d.querySelector(ham).classList.toggle('bi-x-lg');
            d.querySelector(navBar).classList.toggle("activado");
        }
    });
}