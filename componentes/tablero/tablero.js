import { todas_las_cartas } from "./data.js";

let cartasVolteadas = [];
let cartasFijas = [];

function crearCarta(contenido, index) {
    let div = document.createElement('div');
    div.textContent = "?"; 
    div.className = "carta";
    div.dataset.index = index;
    div.dataset.valor = contenido;

    div.addEventListener("click", () => voltearCarta(div));

    return div;
}

function voltearCarta(carta) {
    if (cartasFijas.includes(carta) || cartasVolteadas.length === 2) return;

    carta.textContent = carta.dataset.valor;
    carta.classList.add("marcado");
    cartasVolteadas.push(carta);

    if (cartasVolteadas.length === 2) {
        setTimeout(verificarCartas, 500);
    }
}

function verificarCartas() {
    const [carta1, carta2] = cartasVolteadas;

    if (carta1.dataset.valor === carta2.dataset.valor) {
        cartasFijas.push(carta1, carta2);
    } else {
        carta1.textContent = "?";
        carta2.textContent = "?";
        carta1.classList.remove("marcado");
        carta2.classList.remove("marcado");
    }

    cartasVolteadas = [];
}

function cargarCartas() {
    let div = document.createElement('div');
    div.className = "div-Table";

    todas_las_cartas.forEach((letra, index) => {
        div.appendChild(crearCarta(letra, index));
    });

    return div;
}

export { cargarCartas };
