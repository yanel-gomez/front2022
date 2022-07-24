let btn_nombre = document.getElementById("btn_nombre");
let btn_apellido = document.getElementById("btn_apellido");
let btn_edad = document.getElementById("btn_edad");
btn_nombre.addEventListener("click", mostrar);
btn_apellido.addEventListener("click", mostrar);
btn_edad.addEventListener("click", mostrar);

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