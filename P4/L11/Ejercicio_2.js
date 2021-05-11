console.log("Ejecutando JavaScript...");

/* Obtener elementos del DOM */

const canvas = document.getElementById("canvas");
const img = document.getElementById("imagesrc");
const ctx = canvas.getContext("2d");

/* Acceso al Ddeslizador */

const deslizador = document.getElementById("deslizador");

const rojo = document.getElementById('rojo');

const verde = document.getElementById('verde');

const azul = document.getElementById('azul');

/* Valor del deslizador */

const range_rojo = document.getElementById('range_rojo');

const range_verde = document.getElementById('range_verde');

const range_azul = document.getElementById('range_azul');

/* Función de retrollamada de la imagen cargada. */
/* La imagen no se carga instantaneamente, sino que lleva un tiempo. Solo podemos acceder a ella una vez que este totalmente cargada. */

img.onload = function () {

    /* Se establece como tamaño del canvas, el mismo que el de la imagen original. */

    canvas.width = img.width;
    canvas.height = img.height;

    /* Situar la imgen original en el canvas. No se han hecho manipulaciones todavia. */

    ctx.drawImage(img, 0, 0);

    console.log("Imagen lista...");
};

/* Función de retrollamada del deslizador. */

rojo.oninput = () => {

    /* Mostrar el nuevo valor del deslizador */
    range_rojo.innerHTML = rojo.value;

    /* Situar la imagen original en el canvas. */
    /* No se han hecho manipulacione todavia. */

    ctx.drawImage(img, 0, 0);

    /* Obtener la imagen del canvas en pixeles. */
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    /* Obtener el array con todos los pixeles. */

    let data = imgData.data;

    /* Obtener el umbral de rojo del deslizador */

    umbral_rojo = rojo.value;

    /* Filtrar la imagen según el nuevo umbral. */

    for (let i = 0; i < data.length; i += 4){
        if (data[i] > umbral){
            data[i] = umbral_rojo;
        }
    }

    /* Poner la imagen modificada en el canvas. */
    ctx.putImageData(imgData, 0, 0);
}

/* Función de retrollamada del deslizador. */

verde.oninput = () => {

    /* Mostrar el nuevo valor del deslizador */
    range_verde.innerHTML = verde.value;

    /* Situar la imagen original en el canvas. */
    /* No se han hecho manipulacione todavia. */

    ctx.drawImage(img, 0, 0);

    /* Obtener la imagen del canvas en pixeles. */
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    /* Obtener el array con todos los pixeles. */

    let data = imgData.data;

    /* Obtener el umbral de verde del deslizador */

    umbral_verde = verde.value;

    /* Filtrar la imagen según el nuevo umbral. */

    for (let i = 0; i < data.length; i += 4){
        if (data[i+1] > umbral_verde){
            data[i+1] = umbral_verde;
        }
    }

    /* Poner la imagen modificada en el canvas. */
    ctx.putImageData(imgData, 0, 0);
}

/* Función de retrollamada del deslizador. */

azul.oninput = () => {

    /* Mostrar el nuevo valor del deslizador */
    range_azul.innerHTML = azul.value;

    /* Situar la imagen original en el canvas. */
    /* No se han hecho manipulacione todavia. */

    ctx.drawImage(img, 0, 0);

    /* Obtener la imagen del canvas en pixeles. */
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    /* Obtener el array con todos los pixeles. */

    let data = imgData.data;

    /* Obtener el umbral de azul del deslizador */

    umbral_azul = azul.value;

    /* Filtrar la imagen según el nuevo umbral. */

    for (let i = 0; i < data.length; i += 4){
        if (data[i+2] > umbral_azul){
            data[i+2] = umbral_azul;
        }
    }

    /* Poner la imagen modificada en el canvas. */
    ctx.putImageData(imgData, 0, 0);
}

console.log("Fin...");