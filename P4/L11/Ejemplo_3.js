console.log("Ejecutando JavaScript...");

/* Obtener elementos del DOM */

const canvas = document.getElementById("canvas");
const img = document.getElementById("imagesrc");
const ctx = canvas.getContext("2d");

/* Función de retrollamada de la imagen cargada. */
/* La imagen no se carga instantaneamente, sinio que lleva un tiempo. Solo podemos acceder a ella un vez esté totalmente cargada. */

img.onload = function () {
    console.log("Imagen Cargada");

    /* Se establece como tamaño del canvas el mismo que el de la imagen original. */

    canvas.width = img.width;
    canvas.height = img.height;

    /* Situar la imagen original en el canvas. No se han hecho manipulaciones todavia. */

    ctx.drawImage(img, 0, 0);

    /* Obtener la imafen del canvas en pixeles. */
    
    let imgData = ctx.getImagenData(0, 0, canvas.width, canvas.height);

    /* Obtener el array con todos los pixeles. */
    
    let data = imgData.data;

    /* data[0] es el canal rojo del pixel de la posición (0,0) */
    /* data[1] es el canal verde del pixel de la posición (0,0) */
    /* data[2] es el canal azul del pixel de la posición (0,0) */
    /* data[3] es el canal de transparencia del pixel de la posición (0,0) */
    /* data[4] es el canal ROJO del pixel de la posición (1,0) */
    /* ..... */
    /* ..... */
    /* ..... */
    
    /* En general, para el pixel i */
    /* data[4*i] es el canal rojo */
    /* data[4*i + 1] es el canal verde */
    /* data[4*i + 2] es el canal azul */
    /* data[4*i + 3] es el canal de transparencia */

    data[4*i] = 255;    /* Canal Rojo */
    data[4*i + 1] = 0;  /* Canal Verde */
    data[4*i + 2] = 0;  /* Canal Azul */

    /* Poner la imagen modificada en el canvas */

    ctx.putImageData(imgData, 0, 0);
};

console.log("Fin...");