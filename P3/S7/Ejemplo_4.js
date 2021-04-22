console.log("Ejecutando JavaScript");

/* Acceder al cuerpo del HTML. El primer elemento que nos encontramos el es cuerpo */
body = document.getElementsByTagName("body")[0];

/* Función de retrollamada de la tecla pulsada. */
window.onkeydown = (e) => {

    /* Comprobamos si la tecla pulsada es el ESPACIO */
    if (e.key == " " ){
        /* Cambiamos la activacion de la clase color */
        body.classList.toggle("color");
    }
}