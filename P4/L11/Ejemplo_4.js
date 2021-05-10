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

    /* Eliminar el canal Rojo. Recorro el array de datos, eliminando el canal rojo y dejando el resto, igual que estaba. */

    for (let i = 0; i < data.length; i += 4){
        data[i] = 0; /* Canal Rojo a 0 */
    }

    /* Poner la imagen modificada en el canvas */

    ctx.putImageData(imgData, 0, 0);

    console.log("Hola...");
};

console.log("Fin...");