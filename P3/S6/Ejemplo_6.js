console.log("Ejecutando JavaScript...");

const canvas = document.getElementById("canvas");

/* Definimos el tamaño que va a tener el canvas */

canvas.width = 300;
canvas.heigth = 100;

/* Obtener el contexto del canvas */
const ctx = canvas.getContext("2d");

/* Texto sólido */
ctx.font = "25px Arial";
ctx.fillStyle = 'yellow';
ctx.fillText("Texto sólido", 10, 30);

/* Texto trazo */
ctx.strokeStyle = 'blue';
ctx.font = "35px Arial";
ctx.strokeText("Texto trazo", 5, 80);