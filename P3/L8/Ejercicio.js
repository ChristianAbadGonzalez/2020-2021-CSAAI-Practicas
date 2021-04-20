console.log("Ejecutando JavaScript");

const canvas = document.getElementById("canvas");

/* Definir el tamaño del canvas */
canvas.width = 200;
canvas.height = 400;

/* Obtener el contesto del canvas */
const ctx = canvas.getContext("2d");

/* Variables */
let filas = 5;

let columnas = 9;

let ladrillos = [];

let lives = 3;

let score = 0;

let ancho_ladrillo = 21.75;

let alto_ladrillo = 5;

let ball = {
    "x": canvas.width/2,
    "y": canvas.height/2,
    "r": 2,
    "dx": 2,
    "dy": 2
};

let paddle = {
    "width": 20,
    "height": 10,
    "x": canvas.width/2,
    "y": canvas.height - 10,
    "dx": 0
}; 

/* Array de elementos */
for (let i = 0; i < filas; i++){
    for (let j = 0; j < columnas; j++){
        let ladrillo = {
            "width": 10,
            "height": 5,
            "x": 52 + ancho_ladrillo*j,
            "y": 52 + alto_ladrillo*i,
            "candraw": true
        }
        ladrillos.push(ladrillo);
    }
}

/* Funciones de dibujo del Escenario */
function fondo(){
    ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);

        /* Dibujar */
        ctx.fillStyle = 'black';

        /* Rellenar */
        ctx.fill();

        /* Dibujar el trazo */
        ctx.stroke();
    ctx.closePath();
}

function raqueta(){
    ctx.beginPath();
        ctx.rect(paddle["x"], paddle["y"], paddle.width, paddle.height);

        /* Dibujar */
        ctx.fillStyle = 'black';

        /* Rellenar */
        ctx.fill();

        /* Dibujar el trazo */
        ctx.stroke();
    ctx.closePath();
}

function bloques(){
    /* Dibujamos los elementos visibles */
    ctx.beginPath();
    for (let i = 0; i < ladrillos.length; i++){
        
        let ladrillo = ladrillos[i];
        console.log("ladrillo");
        
        if (ladrillo["candraw"]){
            ctx.rect(ladrillo["x"], ladrillo["y"], ladrillo["width"], ladrillo["height"]);
        
            /* Dibujar */
            ctx.fillStyle = 'white';

            /* Rellenar */
            ctx.fill();

            /* Dibujar el trazo */
            ctx.stroke();
        }
    }

    ctx.closePath();
}

function vidas(){
    ctx.textAlign = 'center';
    
    ctx.font = '30pt monospace';
    
    ctx.fillStyle = 'white';
    
    ctx.fillText(String(lives) + '  ' + String(score), canvas.width/2, 40);

}

function bola(){
    ctx.beginPath();
        
        ctx.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI);
        
        ctx.fillStyle = 'white';
        
        ctx.fill();
        
        ctx.stroke();
    ctx.closePath();
}

function muros(){
    ctx.beginPath();
        ctx.rect(48, 0, 2, canvas.height);
        
        ctx.rect(250, 0, 2, canvas.height);
        
        ctx.fillStyle = 'white';
        
        ctx.fill();
        
        ctx.stroke();
    ctx.closePath();
}

function colisiones(){
    if (paddle.x + paddle.dx <= 50 || paddle.x + paddle.dx + paddle.width >= 250){
        return;
    }else{
        paddle.x += paddle.dx;
    }
}

function colisiones2(){
    if (ball.x + ball.dx + ball.r <= 0 || ball.x + ball.dx + ball.r >= canvas.width){
        ball.dx *= (-1);
    }else if (ball.y + ball.dy + ball.r <= 0 || ball.y + ball.dy + ball.r >= canvas.height){
        ball.dy *= (-1);
    }
    ball.x += ball.dx;
    ball.y += ball.dy;
}

function upgrade(){
    colisiones();
    colisiones2();
}

function update(){
    upgrade();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fondo();
    muros();
    bloques()
    vidas();
    raqueta();
    bola();
    requestAnimationFrame(update);
}

function pulsar(e){
    /* Tecla flecha derecha */
    if (e.keyCode == 39){
        paddle.dx = 10; 
    /* Tecla flecha izquierda */       
    }else if (e.keyCode == 37){
        paddle.dx = -10;
    }
}

function soltar(e){
    if (e.keyCode == 39 || e.keyCode == 37){
        paddle.dx = 0;
    }
}
/* Manejador de eventos */
document.addEventListener("keydown", pulsar, false);
document.addEventListener("keyup", soltar, false);

update();
