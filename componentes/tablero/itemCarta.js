function multiplesCartas(listadoDeCartas) {
    let cartasVolteadas = [];
    let cartasFijas = [];

    function iteem(contenido) {
        let div = document.createElement('div');
        div.className = "cada-carta";

        let front = document.createElement('div');
        front.className = "front";
        front.textContent = ""; 

        let back = document.createElement('div');
        back.className = "back";
        back.textContent = contenido;

        div.appendChild(front);
        div.appendChild(back);

        div.addEventListener('click', () => voltearCarta(div));

        return div;
    }

    function voltearCarta(carta) {
        if (cartasFijas.includes(carta) || cartasVolteadas.length === 2) return;

        carta.classList.add("flipped");
        cartasVolteadas.push(carta);

        if (cartasVolteadas.length === 2) {
            setTimeout(verificarCartas, 700);
        }
    }

    function verificarCartas() {
        const [carta1, carta2] = cartasVolteadas;

        if (carta1.querySelector('.back').textContent === carta2.querySelector('.back').textContent) {
            cartasFijas.push(carta1, carta2);
        } else {
            carta1.classList.remove("flipped");
            carta2.classList.remove("flipped");
        }

        cartasVolteadas = [];
    }

    function cargarCartas(listadoDeCartas) {
        let div = document.createElement('div');
        div.className = "cargar-tablero";

        listadoDeCartas.forEach((cadaLetra) => {
            div.appendChild(iteem(cadaLetra));
        });

        return div;
    }

    return cargarCartas(listadoDeCartas);
}

export { multiplesCartas };


