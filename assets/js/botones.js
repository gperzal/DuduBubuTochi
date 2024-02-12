// main.js
document.addEventListener('DOMContentLoaded', () => {
    const botonHuye = document.getElementById('boton-huye');

    botonHuye.addEventListener('mouseover', (e) => {
        const newX = Math.random() * (window.innerWidth - botonHuye.clientWidth);
        const newY = Math.random() * (window.innerHeight - botonHuye.clientHeight);

        botonHuye.style.position = 'absolute';
        botonHuye.style.left = `${newX}px`;
        botonHuye.style.top = `${newY}px`;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const botonHuye = document.getElementById('boton-huye');

    // Función para mover el botón a una posición aleatoria
    const moverBoton = () => {
        const newX = Math.random() * (window.innerWidth - botonHuye.clientWidth);
        const newY = Math.random() * (window.innerHeight - botonHuye.clientHeight);

        botonHuye.style.position = 'absolute';
        botonHuye.style.left = `${newX}px`;
        botonHuye.style.top = `${newY}px`;
    };

    // Evento para dispositivos con mouse
    botonHuye.addEventListener('mouseover', moverBoton);

    // Evento para dispositivos táctiles
    botonHuye.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del evento táctil
        moverBoton();
    });
});


