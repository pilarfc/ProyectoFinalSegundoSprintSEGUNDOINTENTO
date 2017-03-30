
function crearLista() {
var contenedorSection = document.getElementById("agregarLista");
var contenedor = document.createElement("section");
var listaNombre = document.getElementById("crearNuevaLista").value;
contenedorSection.appendChild(contenedor);

var titulo = document.createElement("h2");
titulo.innerText = listaNombre;
contenedor.appendChild(titulo);
var input = document.createElement("input");
input.id = Date.now ();
contenedor.appendChild(input);
var botonAgregar = document.createElement("input");
botonAgregar.type = "button";
botonAgregar.value = "Crear Pendiente";
botonAgregar.onclick = crearPendiente();
contenedor.appendChild(botonAgregar);
}

function crearPendiente () {

  var elementosListaCrearPendientes = document.getElementById("crearNuevaLista").value;
  var lista = document.createElement("li");
  var textoLista = document.createTextNode(elementosListaCrearPendientes);
    lista.appendChild(textoLista);
    document.getElementById("agregarLista").appendChild(lista);
}
