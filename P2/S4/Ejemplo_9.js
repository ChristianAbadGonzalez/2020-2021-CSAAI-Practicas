/* Leer el elemento del párrafo test2  */
const test2 = document.getElementById('test2')

/* Obtener el elemento del párrafo 1 para su proxima modificación */
const test1 = document.getElementById('test1')

/* Configurar el manejador para el evento de la pulsacion del botón */
test2.onclick = () => {
    console.log("Click sobre el párrafo 2...")

    /* Moficicación del texto */
    test1.innerHTML = "¡¡TEXTO CAMBIADO!!"
}