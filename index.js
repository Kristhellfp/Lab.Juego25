import { cargarTablero } from "./componentes/tablero/tablero.js";
import { headerC } from "./componentes/header/header.js";
import { cargarProgreso } from "./componentes/progreso/progreso.js";
import { footerC } from "./componentes/footer/footer.js";

let DOM = document.querySelector("#root");

function cargarDOM() {
    let contenedor = document.createElement("div");
    contenedor.className = "contenedor";

    contenedor.appendChild(headerC());
    contenedor.appendChild(cargarProgreso());
    contenedor.appendChild(cargarTablero());
    contenedor.appendChild(footerC());

    DOM.appendChild(contenedor);
}

cargarDOM();
