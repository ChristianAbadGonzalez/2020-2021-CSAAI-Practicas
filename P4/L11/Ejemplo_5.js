console.log("Ejecutando JavaScript...");

/* Obtener elementos del DOM */

const canvas = document.getElementById("canvas");
const img = document.getElementById("imagesrc");
const ctx = canvas.getContext("2d");

/* Acceso al Ddeslizador */

const deslizador = document.getElementById("deslizador");

/* Valor del deslizador */

const range_value = document.getElementById("range_value");

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

deslizador.onimput = () => {

    /* Mostrar el nuevo valor del deslizador */
    range_value.innerHTML = deslizador.value;

    /* Situar la imagen original en el canvas. */
    /* No se han hecho manipulacione todavia. */

    ctx.drawImage(img, 0, 0);

    /* Obtener la imagen del canvas en pixeles. */
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    /* Obtener el array con todos los pixeles. */

    let data = imgData.data;

    /* Obtener el umbral de rojo del deslizador */

    umbral = deslizador.value;

    /* Filtrar la imagen según el nuevo umbral. */

    for (let i = 0; i < data.length; i += 4){
        if (data[i] > umbral)
            data[i] = umbral;
    }

    /* Poner la imagen modificada en el canvas. */
    ctx.putImageData(imgData, 0, 0);
}

console.log("Fin...");