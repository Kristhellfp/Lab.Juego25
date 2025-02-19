function headerC(){
    let divheader = document.createElement("div");
    divheader.className = "div-header";
    divheader.appendChild(crearHeader()); 
    return divheader;
}
export {headerC}




function crearHeader() {
    let header = document.createElement("header");
    header.className = "header";

 
    let contenedorTitulo = document.createElement("div");
    contenedorTitulo.className = "contenedor-titulo";


    let img = document.createElement("img");
    img.src = "https://www.pinclipart.com/picdir/big/0-5482_cougar-clipart-yellow-animales-de-la-selva-animados.png";  // ⚠️ Cambia la ruta correcta
    img.alt = "Logo";
    img.className = "animal-header";

    
    let titulo = document.createElement("h1");
    titulo.textContent = "Animales";

    contenedorTitulo.appendChild(img);
    contenedorTitulo.appendChild(titulo);

    let nav = document.createElement("nav");
    nav.className = "nav-header";

    let botones = ["Fase 1", "Fase 2", "Fase 3", "Fase 4", "Fase 5", "Salir"];

    botones.forEach((texto) => {
        let boton = document.createElement("button");
        boton.textContent = texto;
        boton.className = "btn-fase";
        nav.appendChild(boton);
    });

  
    header.appendChild(contenedorTitulo);
    header.appendChild(nav);

    return header;
}

export { crearHeader };
