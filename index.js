let DOM = document.querySelector("#root");
 

let contenedor = document.createElement ('div');
contenedor.className = "contenedor";

let divheader = document.createElement ('div');
divheader.className = "div-header"
contenedor.appendChild (divheader);

let divprogreso = document.createElement ('div');
divprogreso.className = "div-progreso"
contenedor.appendChild (divprogreso);

let divtablero = document.createElement ('div');
divtablero.className = "div-tablero"
contenedor.appendChild (divtablero);

let divfooter = document.createElement ('div');
divfooter.className = "div-footer"
contenedor.appendChild (divfooter);



DOM.appendChild(contenedor); 