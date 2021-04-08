console.log("Ejecutando JavaScript...");

const canvas = document.getElementById("canvas");

/* Definimos el tamaño que va a tener el canvas */

canvas.width = 300;
canvas.heigth = 100;

/* Obtener el contexto del canvas */
const ctx = canvas.getContext("2d");

/* Cada objeto a dibujar dentro del contexto, lo delimitaremos por los metodos "beginPath()" y "closePath()" */

ctx.beginPath();
    /* Línea Horizontal */
    ctx.moveTo(10, 20);
    ctx.lineTo(100, 20);

    /* Línea Horizontal y Vertical, unidas */
    ctx.moveTo(10, 80);
    ctx.lineTo(150, 80);
    ctx.lineTo(150, 20);

    ctx.strokeStyle = 'blue';

    /* Cambiar el tamaño de la linea del trazo. */
    ctx.lineWidth = 4;

    /* Dibujar el trazo */
    ctx.stroke();
ctx.closePath();