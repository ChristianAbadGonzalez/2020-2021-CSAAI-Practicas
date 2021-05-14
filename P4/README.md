 # Práctica 4

Actualización de repositorio de Construcción de Servicios y Aplicaciones de Aplicaciones en Internet 2020/2021

****************************************************************************************************

Alumno: Christian Abad González
DNI: 06603877-W
NºEXP: 1094
Práctica 4: Filtrado de Imagenes.

****************************************************************************************************

*** Manual de Usurio ***

Hola usuari@s, bienvenidos a la Práctica 4 de Filtrado de Imágenes.

En esta práctica hemos implementado diferentes funciones y filtros para poder muestrear y modificar una imagen. En un momento inicial, podemos observar 2 imagenes sin modificar, es decir, originales. Para poder selecionar dicha imagen hemos utilizado dos botones, con los cuales vas a poder seleccionar la imagen para su muestreado en el canavas y su posterior modificación. 

En este caso vamos a editar una serie de imagenes en cuestion de dos competidores a nivel mundial en todos los festivales del mundo, como pueden ser Pioneer DJ y Denon DJ. 

Con una finalidad del manual de usuario, vamos a definir tanto las especificaciones basicas que pedia dicha práctica como sus mejoras:

*** Especificaciones Básicas ***

Implementación de los siguientes filtros:

Filtro de Grises: Toma la imágen que estuviera en el canvas (ya sea la original o con alguna otra modificación) y la pone en escala de grises.

Filtro de Umbral de Colores: Toma la imágen original y a partir de ella podemos modificar mediante los deslizadores podemos modificar el umbral de color de cada imágen mediante los umbrales de color RGB ("R" --> Rojo(Red), "G" --> Verde(Green), "B" --> Azul(Blue)). Si el deslizador toma el valor del umbral de color de 255, significara que dicha componente no ha sido modificada. Sin embargo, si dicho deslizador toma cualquier valor comprendido en el intervalo de [0 - 254], significara que dicha componente ha sido modificada.

*** Especificaciones de Mejora ***

Como mejora adicional, hemos implementado los siguientes filtros:

Espejo: Muestra la imágen original de forma contraria.

Inversión: Muestra la imágen original dada la vuelta.

Negativo: Muestra la imágen original con los umbrales de color de forma creciente negativamente.

Vintage: Muestra la imágen original con un filtro de color sepia mediante una matriz de transformación, lo que conlleva a observar un efecto visual de la imagen original con un efecto vintage.
