console.log("Ejecutando JavaScript...");

const canvas = document.getElementById("canvas");

canvas.width = 200;
canvas.height = 400;

const ctx = canvas.getContext("2d");

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

/* Constante de la bola */
let bola = {
    x: canvas.width/2,
    y: canvas.height/2,
    r: 5,
    dx: 0,
    dy: 0,
};

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

function draw () {
    drawBricks();
    drawPaddle();
    drawBall();
    requestAnimationFrame(draw);
}

draw();