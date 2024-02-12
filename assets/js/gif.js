const imagenes = [
    "./assets/img/img1.gif",
    "./assets/img/img2.gif",
    "./assets/img/img3.gif",
    "./assets/img/img4.gif",
    "./assets/img/img5.gif",
    "./assets/img/img6.gif",
    "./assets/img/img8.gif",
    "./assets/img/img7.gif",
];

// Referencia al elemento de imagen en el DOM
const imagenGif = document.getElementById('gif-animado');

// Índice para la imagen actual
let indiceActual = 0;


// Función para cambiar la imagen
function cambiarImagen() {
    indiceActual = (indiceActual + 1) % imagenes.length; // Incrementa el índice y vuelve a empezar si es necesario
    imagenGif.src = imagenes[indiceActual]; // Cambia la fuente de la imagen
}

// Establece un intervalo para cambiar la imagen cada 3 segundos (3000 milisegundos)
setInterval(cambiarImagen, 2000);