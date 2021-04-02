console.log("Ejecutando JavaScript de la Práctica 2 de CSAAI...");

/* Elementos de la interfaz de la calculadora */
display = document.getElementById("display")
igual = document.getElementById("igual")
clear = document.getElementById("clear")
clear_all = document.getElementById("clear_all")
punto = document.getElementById("punto")

/* Maquina de Estados para la calculadora */
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3,
    Resultado: 4,
}

/* La variable 'ESTADO', de la calculadora; al comenzar debe estar en el estado inicial 'INIT' */
let estado = ESTADO.INIT;

/* El boton/tecla 'ANS' de la calculadora, al inicializar la calculadora, está debe comenzar en el valor 0 */
let ANS = "0";

//-- Crea un array con todos los elementos de la clase digito -> Busqueda en el archivo HTML.
let digitos = document.getElementsByClassName("digito"); 

//-- Crea un array con todos los elementos de la clase operacion -> Busqueda en el archivo HTML.
let operacion = document.getElementsByClassName("operacion");

//-- Recorro el array de los digitos, son del 0 al 9
for (i=0; i<digitos.length; i++){
    digitos[i].onclick = (ev)=> {
      digito(ev.target.value);
    }
  }

/* Función de retrollamada de los digitos */
function digito(botons){

    /* Se ha recibido un dígito. Según en qué estado se encuentre la calculadora, se hará una cosa u otra... */

    /* Si es el primer dígito, no lo añadimos, sino que lo mostramos directamente en el display */
    if(estado == ESTADO.INIT) {
        display.innerHTML = botons;
        estado = ESTADO.OP1;
        console.log(estado,"operador 1");
      }else if (estado == ESTADO.OP1 || estado == ESTADO.OP2 || estado == ESTADO.OPERATION){
        display.innerHTML += botons;
        if (estado == ESTADO.OPERATION) {
            estado = ESTADO.OP2;
            console.log(estado,"segundo operando");
            ESTADO.Resultado = false;
        }
      }
}

/* Establecer la misma funcion de retrollamada para todos los botones de tipo dígito */
for (let boton of digitos){

    /* Se ejecuta cuando se pulsa un botón que es un dígito */
    boton.onclick = (ev) => {
        display.innerHTML += ev.target.value;
        console.log("DIGITO!!");
    }
}

/* Establecer la misma funcion de retrollamada para todos los botones de tipo dígito */
for (let operando of operacion){

    /* Se ejecuta cuado se pulsa un botón que es un operador */
    operando.onclick = (ev) => {
        display.innerHTML += ev.target.value;
        console.log("OPERADOR!!");
    }
    
}

/* Funciones de retrollamada de los botones... */
/* Cada vez que se pulse un boton se actua sobre la cadena, */
/* añadiendo digito 1 + operador + digito 2 + evaluacion de la operacion. */

//-- Evaluo coma para no introducir dos seguidas
punto.onclick = (ev) => {
    if(ESTADO.Resultado){
      console.log("Error al poner dos comas seguidas");
    }else{
      display.innerHTML += ev.target.value;
      ESTADO.Resultado= true;
      console.log(estado,"No hay error en la coma");
    }
  }

/* Evaluar la expresión */
igual.onclick = () => {
    if(estado == ESTADO.OP1 ||  estado == ESTADO.OP2){
        display.innerHTML = eval(display.innerHTML);
        estado = ESTADO.OP1;
        ESTADO.Resultado = true;
        console.log(estado,"igual");
    }
  }

/* Borramos el ultimo elemento que hemos pulsado en la Calculadora. */
clear.onclick = () => {
    if (display.innerHTML.length == 1) {
        display.innerHTML = "";
        estado = ESTADO.INIT
      } else {
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
        if (estado == ESTADO.OPERATION){
          estado = ESTADO.OP1;
        }
      }
    }

/* Ponemos toda la calculadora en Estado Inicial */
clear_all.onclick = () => {
    display.innerHTML = " ";
    estado = ESTADO.OP1;
}

/* Gestion de la operacion de la raiz cuadrada */
raiz_cuadrada.onclick = () => {
    display.innerHTML = Math.sqrt(display.innerHTML);
  }
  
exponente.onclick = () => {
    display.innerHTML = Math.pow(display.innerHTML, 2);
}

numero_pi.onclick = () => {
    display.innerHTML = Math.PI(display.innerHTML, 3.141592654);
}
