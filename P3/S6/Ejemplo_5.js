console.log("Ejecutando JavaScript...");

const canvas = document.getElementById("canvas");

/* Definimos el tamaño que va a tener el canvas */

canvas.width = 300;
canvas.heigth = 100;

/* Obtener el contexto del canvas */
const ctx = canvas.getContext("2d");

/* Cada objeto a dibujar dentro del contexto, lo delimitaremos por los metodos "beginPath()" y "closePath()" */

ctx.beginPath();
    /* Dibujamos un circulo en las coordenadas (x,y) del centro, con un X Radio, un Ángulo inicial y un Ángulo final */
    ctx.arc(100, 50, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'yellow';

    /* Dibujar el trazo */
    ctx.strokeStyle();

    /* Dibujar el relleno */
    ctx.fillStyle();

ctx.closePath();