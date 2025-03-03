//Creando el arreglo donde se guardarán los nombre
let amigos = [];

//Agregando amigo al arreglo
function agregarAmigo() {
    let texto = document.getElementById("amigo").value.trim();

    if (texto != "" && texto != " ") {
        amigos.push(texto);
        limpiarCajaTexto();
    } else {
        alert("Por favor, inserte un nombre");
    }
}

//Limpiando la caja de texto
function limpiarCajaTexto() {
    document.getElementById("amigo").value = '';
}