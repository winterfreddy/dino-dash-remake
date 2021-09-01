let idleDinoSprite = new Image();
idleDinoSprite.src = "./public/images/css_sprites_idle.png";
let runDinoSprite = new Image();
runDinoSprite.src = "./public/images/css_sprites_run.png";

let canvasWidth = 2500;
let canvasHeight = 1550;
let dinoWidth = 700;
let dinoHeight = 492;

let idleFrameCount = 10;
let runFrameCount = 8;

let dinoX = 30;
let dinoY = 1000;
let srcX;
let srcY;

let currentFrame = 0;
let idleMode = true;

let canvas = document.getElementById("myCanvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
let ctx = canvas.getContext('2d');

function updateFrame() {
    let frameCount = idleMode ? idleFrameCount : runFrameCount;
    currentFrame = ++currentFrame % frameCount;
    srcX = currentFrame * dinoWidth;
    srcY = 0;

    ctx.clearRect(dinoX, dinoY, dinoWidth, dinoHeight);
}

function drawImage() {
    updateFrame();
    let dinoSprite = idleMode ? idleDinoSprite : runDinoSprite;
    ctx.drawImage(dinoSprite, srcX, srcY, dinoWidth, dinoHeight, dinoX, dinoY, dinoWidth, dinoHeight);
}

setInterval(function() {
    drawImage();
}, 100);