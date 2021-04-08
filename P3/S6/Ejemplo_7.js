console.log("Ejecutando JavaScript...");

const canvas = document.getElementById("canvas");

/* Definimos el tamaño que va a tener el canvas */

canvas.width = 500;
canvas.heigth = 300;

/* Obtener el contexto del canvas */
const ctx = canvas.getContext("2d");

/* Leer la imagen del documento de HTML. */
var logo = document.getElementById("logo-urjc");

logo.onload = () => {
    /* Insertamos la imagen en el canvas, una vez que ya este cargada! */
    ctx.drawImage(logo, 10, 20);
}