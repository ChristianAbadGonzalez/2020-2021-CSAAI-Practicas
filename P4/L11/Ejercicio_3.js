console.log("Ejecutando JavaScript...");

/* Obtener elementos del DOM */

const canvas = document.getElementById("canvas");

const img = document.getElementById("imagesrc");

const ctx = canvas.getContext("2d");

/* Acceso a los botones */

const color = document.getElementById("color");

const grises = document.getElementById("grises");

/* Acceso al Deslizador */

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

function colores(){

    /* Situar la imagen original en el canvas. */
    /* No se han hecho manipulacione todavia. */

    ctx.drawImage(img, 0, 0);

    /* Obtener la imagen del canvas en pixeles. */
    
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    /* Obtener el array con todos los pixeles. */

    let data = imgData.data;

    /* Resolución de los valores de los deslizadores de los colores */
    
    range_rojo.innerHTML = rojo.value;
    
    range_verde.innerHTML = verde.value;
    
    range_azul.innerHTML = azul.value;

    /* Obtención de los umbrales de los colores */

    var umbral_rojo = rojo.value;

    var umbral_verde = verde.value;

    var umbral_azul = azul.value;

    /* Filtrado de la imagen según el nuevo umbral */

    for (let i = 0; i < data.length; i += 4){
        if (data[i] > umbral_rojo){
            data[i] = umbral_rojo;
        }
        
        if (data[i+1] > umbral_verde){
            data[i+1] = umbral_verde;
        }
        
        if (data[i+2] > umbral_azul){
            data[i+2] = umbral_azul;
        }
    }

    /* Poner la imagen modificada en el canvas. */
    ctx.putImageData(imgData, 0, 0);

}

/* Función de retrollamada de los deslizadores de los colores. */

rojo.oninput = () => {
    colores();
}

verde.oninput = () => {
    colores();
}

azul.oninput = () => {
    colores();
}

/* Función de retrollamada de la Escala de Grises. */

grises.onclick = () => {
    /* Obtener la imagen del canvas en pixeles. */
    
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    /* Obtener el array con todos los pixeles. */

    let data = imgData.data;

    /* Filtrado de la imagen según el nuevo umbral */

    for (let i = 0; i < data.length; i += 4){
        Red = data[i];
        
        Green = data[i+1];
        
        Blue = data[i+2];
        
        G_Scale = (3 * Red + 4 * Green + Blue)/8;

        G_Scale = data[i] = data[i+1] = data[i+2];
    }

    /* Poner la imagen modificada en el canvas. */
    
    ctx.putImageData(imgData, 0, 0);
}

console.log("Fin...");