console.log("Ejecutando JavaScript");

const canvas = document.getElementById("canvas");

/* Definir el tamaño del canvas */
canvas.width = 300;
canvas.heght = 100;

/* Obtener el contesto del canvas */
const ctx = canvas.getContext("2d");

/* Posición del elemento a animar */
let x = 0;
let y = 0;

/* Función principal de animación */
function update(){
    console.log("test");
    
    /* Algoritmo de animación: */
    
    /* 1º Actualizar las posiciones de los elementos --> PENDIENTE */

    /* 2º Borrado del canvas */
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* 3º Dibujar los elementos visibles */
    ctx.beginPath();
        ctx.rect(x, y, 20, 20);

        /* Dibujar */
        ctx.fillStyle = 'red';

        /* Rellenar */
        ctx.fill();

        /* Dibujar el trazo */
        ctx.stroke();
    ctx.closePath();

    /* 4º volver a ejecutar "UPDATE" cuando toque */

    requestAnimationFrame(update);
}

/* ¡Que empieze la función! */
update();
