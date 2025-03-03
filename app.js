//Creando el arreglo donde se guardarán los nombre
let amigos = [];

//Agregando amigo al arreglo y validando que la caja texto no este vacía.
function agregarAmigo() {
    let texto = document.getElementById("amigo").value.trim();

    if (texto != "" && texto != " ") {
        amigos.push(texto);
        limpiarCajaTexto();
        mostrarAmigos(amigos);
    } else {
        alert("Por favor, inserte un nombre");
    }
}

//Limpiando la caja de texto
function limpiarCajaTexto() {
    document.getElementById("amigo").value = '';
}

//Mostrar amgigos en una lista (ul->li)
function mostrarAmigos(arreglo) {
    document.getElementById("listaAmigos").innerHTML = '';

    for (let i = 0; i < arreglo.length; i++) {
        listaAmigos = document.getElementById("listaAmigos");
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = arreglo[i];
        listaAmigos.appendChild(nuevoElemento);
    }
}