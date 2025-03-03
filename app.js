//Creando el arreglo donde se guardarán los nombre
let amigos = [];

//Agregando amigo al arreglo y validando que la caja texto no este vacía.
function agregarAmigo() {
    let texto = document.getElementById("amigo");
    let valorTexto = texto.value.trim()

    if (valorTexto != "" && valorTexto != " ") {
        amigos.push(valorTexto);
        limpiarCajaTexto();
        mostrarAmigos(amigos);
        texto.focus();
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

//Creando la función para sortear un amigo
function sortearAmigo() {
    if (amigos.length != 0) {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    } else {
        alert('Aún no existen elementos para sortear');
        document.getElementById("amigo").focus();
    }
}

//Reiniciando el Sorteo
function reinciarSorteo() {
    if (amigos.length > 0) {
        amigos.length = 0;
        document.getElementById("listaAmigos").innerHTML = '';
        document.getElementById("resultado").innerHTML = '';
        alert('Se ha reiniciado el sorteo, ingresa nuevos nombres por favor.');
    } else {
        alert('Aún no existen amigos que sortear');
    }
    document.getElementById("amigo").focus();
}