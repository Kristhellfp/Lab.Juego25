import { todaslasCartas } from "./data.js";
import { mezclarCartas, mostrarCartas } from "./funcionesCartas.js";
import { multiplesCartas } from "./itemCarta.js";

function cargarTablero() {
    let divTablero = document.createElement("div");
    divTablero.className = "divtablero"; 

    let divTable = document.createElement("div");
    divTable.className = "div-Table"; 

    let cartasMezcladas = mostrarCartas(); 
    let cartasFinales = mezclarCartas(cartasMezcladas); 
    let cartasElementos = multiplesCartas(cartasFinales);
    divTable.appendChild(cartasElementos); 

    divTablero.appendChild(divTable); 

    return divTablero;
}

export { cargarTablero };
