import { cargarCartas } from "./componentes/tablero/tablero.js";
import { crearHeader } from "./componentes/header/header.js";



    let DOM = document.querySelector("#root");

    let contenedor = document.createElement("div");
    contenedor.className = "contenedor";

    let divheader = document.createElement("div");
    divheader.className = "div-header";
    divheader.appendChild(crearHeader()); 
    contenedor.appendChild(divheader);

    let divprogreso = document.createElement("div");
    divprogreso.className = "div-progreso";
    contenedor.appendChild(divprogreso);

    let divtablero = document.createElement("div");
    divtablero.className = "div-tablero";
    divtablero.appendChild(cargarCartas());
    contenedor.appendChild(divtablero);

    let divfooter = document.createElement("div");
    divfooter.className = "div-footer";
    contenedor.appendChild(divfooter);

    DOM.appendChild(contenedor);



    let todas_las_cartas = document.querySelectorAll('.carta');
    todas_las_cartas.forEach(cargarCartas =>{
     cargarCartas.addEventListener("click",()=>{
         cargarCartas.classList.add("marcado");


    });
});