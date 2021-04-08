console.log("Ejecutando JavaScript...");

const canvas = document.getElementById("canvas");

/* Definimos el tamaño que va a tener el canvas */

canvas.width = 300;
canvas.heigth = 100;

/* Obtener el contexto del canvas */
const ctx = canvas.getContext("2d");

/* Cada objeto a dibujar dentro del contexto, lo delimitaremos por los metodos "beginPath()" y "closePath()" */

ctx.beginPath();

    /* Definir un rectangulo de dimensiones 100x50, cuya esquina superior izquierda esta en (5,5) */
    ctx.rect(5,5, 100, 50);

    /* Dibujar */
    ctx.fillStyle = 'red';

    /* Cambiar el tamaño de la linea del trazo. */
    ctx.lineWidth = 4;

    /* Rellenar */
    ctx.fill();

    /* Dibujar el trazo */
    ctx.stroke();
ctx.closePath();