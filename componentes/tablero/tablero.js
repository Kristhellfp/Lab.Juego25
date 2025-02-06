import { todas_las_cartas } from "./data.js";
//Cargar cad elemento en consola

function item (contenido){
    let div = document.createElement('div');
    div.textContent = contenido;
    div.className ="carta";
    

    return div;
}



function cargarCartas(){
   
    let div = document.createElement('div');
    div.className = "div-Table";
    
   
    todas_las_cartas.forEach((letra)=>{
        div.appendChild(item(letra));
    });

    return div;

  
}

export { cargarCartas};