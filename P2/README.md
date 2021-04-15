 # Práctica 2

Actualización de repositorio de Construcción de Servicios y Aplicaciones de Aplicaciones en Internet 2020/2021

**************************************************************************************************************

Alumno: Christian Abad González
DNI: 06603877-W
NºEXP: 1094
Práctica 2: Calculadora

**************************************************************************************************************

Hola Usuari@, bienvenido nuevamente. Volvemos al punto de partida, es decir, te voy a explicar que hemos estado realizando en esta práctica. 

En esta práctica que vas a poder ejecutar desde tu propio ordenador o movil, vas a probar el funcionamiento de una calculadora. 

Para ello, te voy a explicar un poco su funcionamiento, para realizar operaciones básicas como 
(suma, resta, multiplicación y división). 

Para ello una implementación que hemos tenido que realizar ha sido una calculadora básica, es decir, una calculadora que unicamente pueda hacer una unica operación en cada sentencia, para que la funcione se ejecute perfectamente, tu como usuari@ deberas seguir la siguientes instrucciones: 
    
    1º Introducir/pulsar un dígito/número compuesto del siguiente intervalo [0 - 9].
    
    2º Introducir una operación que hemos predefinido anteriormente [suma(+), resta(-), multiplicación(*) o división(/)].
    
    3º Introducir/pulsar un dígito/número compuesto del siguiente intervalo [0 - 9].

    Si has cumplido todas y cada una de las reglas expuesta en los puntos anteriores, unicamente te quedara realizar un último paso.
    
    4º Introducir/pulsar el botón de "Igual(=)".

    Finalmente habras optenido tu resultado númerico.

Todo esto que te he estado esplicando en los puntos anteriores se ha logrado mediante la introducción y ajuste de lo que en una lógica binária conocemos como "Maquina de Estados", cuya formación o predefinicion viene dada de la siguiente manera:

    1º Estado inicial (ESTADO.INIT).
    
    2ª Estado operando 1 (ESTADO.OP1).
    
    3º Estado operación (ESTADO.OPERATION).
    
    4º Estado operando 2 (ESTADO.OP2).
    
    5º Estado resultado (ESTADO.RESULT).

Dicha implementación de la maquina de estados ha sido estudiada adecuadamente para lograr cumplir las especificaciones del proyecto expedido en la propias clases impartidas en el curso. 

Más alla de haber realizado las diferentes implementaciones de la formación de una calculadora básica, yo como programador de dicha calculadora, he querido estudiar e implementar mejoras, para que tanto como tu como otro cualquier usuario pueda hacer uso de dicha aplicación en cualquier situción que se necesite hacer una de una calculadora.

Dichas mejoras expuestas han sido:

    1º Exponente ( "^" / "**").

    2º Porcentaje ( "%" / "*0.01").

    3º Parentesis ( "(" / ")") --> ¡Poca Implementación/Aplicación en este tipo de calculadora!.

    4º ANS ("Uso del ultimo número obtenido despues de haber ejecutado la primero operación completa").

    5º AC ("Borrado de la expresión al completo y vuelta al estado inicial").

    6º DEL ("Borrado del ultimo elemente introducido o pulsado").

    7º Raiz cuadrada ("sqrt").

    8º Número PI ("3.1415....") --> ¡Poca Implementación/Aplicación en este tipo de calculadora!.

Espero que te sirva de ayuda esta breve pero concisa explicación.