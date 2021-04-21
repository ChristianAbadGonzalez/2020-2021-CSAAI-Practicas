console.log("Ejecutando JavaScript");

/* Entrada de texto 1-3 con sus párrafos de visualización */
const text1 = document.getElementById("text1");
const text1_disp = document.getElementById("text1_disp");
const text2 = document.getElementById("text2");
const text2_disp = document.getElementById("text2_disp");
const text3 = document.getElementById("text3");
const text3_disp = document.getElementById("text3_disp");

/* Entrada de Texto de tipo password y su display asociado */
const passw = document.getElementById("passw");
const passw_disp = document.getElementById("passw_disp");

/* Retrollamada de la entrada 1 */
text1.oninput = () => {
    text1_disp.innerHTML = "Escribiendo..."
}

text1_disp.onchange = () => {
    text1_disp.innerHTML = text1.value;
}

/* Retrollamada de la entrada 2 */
text2.onchange = () => {
    text2_disp.innerHTML = text2.value;
}

/* Retrollamada de la entrada 2 */
text3.onchange = () => {
    text3_disp.innerHTML = text3.value;
}

/* Retrollamada de la entrada 2 */
passw.onchange = () => {
    passw_disp.innerHTML = passw.value;
}