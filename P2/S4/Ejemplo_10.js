console.log("Ejecutando JavaScript...");

/* Manera de obtener el texto escrito */
const test = document.getElementById('test');

/* Función de retrollamada de la pulsación del párrafo */
test.onclick = () => {
    console.log("¡Click!");
    
    /* Cambiamos el estilo del color del fondo... 
    Si no teniamos color definido, le definimos el color amarillo.*/
    if (test.style.backgroundColor == ""){
        test.style.backgroundColor = "yellow";
 
    }
    /* Si ya tenia el color se lo quitamos */
    else{
        test.style.backgroundColor = "";
    }
}   
