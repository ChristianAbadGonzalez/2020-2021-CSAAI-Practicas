console.log("Ejecutando JavaScript...");

const canvas = document.getElementById("canvas");

canvas.width = 200;
canvas.height = 400;

const ctx = canvas.getContext("2d");

/* Maquina de Estados */
const STATES = {
    waiting: 0,
    playing: 1,
}

/* Contador de Vidas */
let lives = 3;

/* Estado Actual */
let estadoActual = STATES.waiting;

//-- Constantes de los ladrillos
const LADRILLO = {
    F: 5,  // Filas
    C: 10,  // Columnas
    w: 20,
    h: 10,
    origen_x: 0,
    origen_y: 0,
    padding: 5,
    visible: true
};

/* Constante de la raqueta */
let raqueta = {
    x: canvas.width/2,
    y: canvas.height - 15,
    width: 30,
    height: 5,
    dx: 0,
    dy: 0,
};

/* Variables de la bola */
let bola = {
    x: canvas.width/2,
    y: canvas.height/2,
    r: 5,
    dx: 0,
    dy: 0,
};

/* Variables de las Puntuaciones */
let puntuacion = 0;
let maxPuntuacion = LADRILLO.F * LADRILLO.C

//-- Estructura de los ladrillos
const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++) {
    ladrillos[i] = [];
    for (let j = 0; j < LADRILLO.C; j++) {
      ladrillos[i][j] = {
          x: (LADRILLO.w + LADRILLO.padding) * j,
          y: (LADRILLO.h + LADRILLO.padding) * i,
          w: LADRILLO.w,
          h: LADRILLO.h,
          padding: LADRILLO.padding,
          visible: LADRILLO.visible
        };
    }
}

function drawBricks () {
    //-- Dibujar ladrillos
    for (let i = 0; i < LADRILLO.F; i++) {
        for (let j = 0; j < LADRILLO.C; j++) {
            //-- Si el ladrillo es visible se pinta
            if (ladrillos[i][j].visible) {
                ctx.beginPath();
                ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
                ctx.fillStyle = 'blue';
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function drawPaddle () {
    ctx.beginPath();
    ctx.rect(raqueta.x, raqueta.y, raqueta.width, raqueta.height);
    /* Dibujar */
    ctx.fillStyle = 'blue';

    /* Rellenar */
    ctx.fill();

    ctx.closePath();
}

function drawBall () {
    ctx.beginPath();
    ctx.arc(bola.x, bola.y, bola.r, 0, 2*Math.PI);
    /* Dibujar */
    ctx.fillStyle = 'blue';

    /* Rellenar */
    ctx.fill();

    ctx.closePath();
} 

function updatePaddle() {
    if (raqueta.x + raqueta.dx > 0 && raqueta.x + raqueta.width + raqueta.dx < canvas.width){
        raqueta.x += raqueta.dx;
    }
}

function updateBall() {
    if (bola.x + bola.r + bola.dx > canvas.width || bola.x - bola.r + bola.dx < 0){
        bola.dx *= (-1);
    }
    
    if (bola.y - bola.r + bola.dy < 0){
        bola.dy *= (-1);
    }else if (bola.y + bola.r + bola.dy > canvas.height){
        lives -= 1;
        if (lives == 0) {
            alert("GAME-OVER!");
            location.reload();
        }else{
            estadoActual = STATES.waiting;
            bola.x = canvas.width/2;
            bola.y = canvas.height/2;
            bola.dx = 0;
            bola.dy = 0;
        }
    }

    if (bola.y + bola.r + bola.dy == raqueta.y){
        if (bola.x - bola.r + bola.dx >= raqueta.x && bola.x + bola.r + bola.dx <= raqueta.x + raqueta.width){
            bola.dy *= (-1);
        }
    }
    
    for (let i = 0; i < LADRILLO.F; i++) {
        for (let j = 0; j < LADRILLO.C; j++) {
            //-- Si el ladrillo es visible se pinta
            if (ladrillos[i][j].visible){
                if (bola.y - bola.r + bola.dy <= ladrillos[i][j].y + ladrillos[i][j].h) { //-- Misma altura
                    if (bola.x - bola.r + bola.dx >= ladrillos[i][j].x && bola.x + bola.r + bola.dx <= ladrillos[i][j].x + ladrillos[i][j].w) {
                        bola.dy *= (-1); ladrillos[i][j].visible = false; puntuacion++;
                    }
                }
            }
        }
    }
    bola.x += bola.dx
    bola.y += bola.dy
    if (puntuacion === maxPuntuacion) {
        alert('You win!');
        estadoActual = STATES.waiting;
        location.reload();
    }
}

function draw () {
    if (estadoActual == STATES.playing){
        updatePaddle();
        updateBall();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    drawBricks();
    drawPaddle();
    drawBall();
    requestAnimationFrame(draw);
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        raqueta.dx = 5;
    }else if (e.keyCode == 37){
        raqueta.dx = (-5);
    }else if (e.keyCode == 32) {
        if (estadoActual == STATES.waiting){
            estadoActual = STATES.playing;
            bola.dx = 2;
            bola.dy = (-2);
        }
    }
}, false)

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39 || e.keyCode == 37) {
        raqueta.dx = 0;
    }
}, false)

draw();