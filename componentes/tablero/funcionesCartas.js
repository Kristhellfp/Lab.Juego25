import { todaslasCartas } from "./data.js";

function mezclarCartas(listaCartas) {
    let cartasMezcladas = [...listaCartas]; 
    for (let i = cartasMezcladas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cartasMezcladas[i], cartasMezcladas[j]] = [cartasMezcladas[j], cartasMezcladas[i]];
    }
    return cartasMezcladas;
}

function mostrarCartas() {
    let guardarCartas = localStorage.getItem("Cartas");
    if (guardarCartas) {
        return JSON.parse(guardarCartas);
    } else {
        let revolver = mezclarCartas(todaslasCartas);
        localStorage.setItem("Cartas", JSON.stringify(revolver));
        return revolver;
    }
}

export { mezclarCartas, mostrarCartas };
