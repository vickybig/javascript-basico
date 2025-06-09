// Funcion para mostrar un cuadro de dialogo emergente
function mostrarMensaje(){
    alert("Hola mundo :)");
}

// Variables
function imprimirVariables(){
    let nombre = "Rodrigo";
    let edad = 42;
    // Forma tradicional de concatenar cadenas
    console.log("nombre: ", nombre);
    console.log("edad: ", edad);
    // Forma moderna de concatenar cadenas
    console.log(`nombre: ${nombre}, edad: ${edad}`);
    // Otros tipos de impresión
    console.error("Error: bla bla bla");
    console.warn("Advertencia: x x x");
}
