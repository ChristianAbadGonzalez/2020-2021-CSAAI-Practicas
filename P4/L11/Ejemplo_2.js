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

    /* Obtener el número total de elementos en el array. */
    
    console.log("Tamaño de data: " + data.length);
    
    /* El número total de pixeles e la altura por la anchura */

    npixels = canvas.width * canvas.height;
    console.log("Anchura (en pixeles): " + canvas.width);
    console.log("Altura (en pixeles): " + canvas.height);
    console.log("Pixiles totales: " + npixels);

    /* Puesto que cada pixel ocupa 4 bytes, el array de píxeles tiene un tamaño de 4 * número de pixeles. */

    console.log("Total de datos de la imagen: " + npixels * 4);

};

console.log("Fin...");