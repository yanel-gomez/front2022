let btn_mostrar = document.getElementById("btn_mostrar");
btn_mostrar.addEventListener("click", mostrar);

function mostrar() {
    let nombre, apellido, edad = "n/n";
    let inputNombre = document.getElementById("inputNombre");
    nombre = inputNombre.value;
    let inputApellido = document.getElementById("inputApellido");
    apellido = inputApellido.value;
    let inputEdad = document.getElementById("inputEdad");
    edad = inputEdad.value;
    alert("Su nombre completo es " + nombre + " " + apellido + " y tiene " + edad + " años de edad");
}