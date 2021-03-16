console.log("Ejecutando JavaScript...")

/* Leer el párrafo identificado como 'test' */
const test = document.getElementById('test')

/* Configurar el manejador para el evento de la pulsación de boton */
test.onclick = () => {
    console.log("Click sobre el párrafo...")
}