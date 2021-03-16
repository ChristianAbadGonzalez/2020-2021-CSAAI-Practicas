/* Tenemos acceso al documento/fichero HTML mediante el objeto "document" */

/* Leer el párrafo identificado como test */
const test = document.getElementById('test')

/* Mostrar en la consola el contenido del párrafo (¡Propiedad "innerHTML"!) */
console.log("Párrafo test leido. Dice:");
console.log(test.innerHTML);