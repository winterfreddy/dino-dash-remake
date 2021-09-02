let idleDinoSprite = new Image();
idleDinoSprite.src = "./public/images/css_sprites_idle.png";
let runDinoSprite = new Image();
runDinoSprite.src = "./public/images/css_sprites_run.png";
let palmTreeSprite = new Image();
palmTreeSprite.src = "./public/images/palm_tree.png";
let meteorSprite = new Image();
meteorSprite.src = "./public/images/meteor.png";
let explosionSprite = new Image();
explosionSprite.src = "./public/images/explosion-3.png";

let canvasWidth = 2500;
let canvasHeight = 1550;
let dinoWidth = 700;
let dinoHeight = 492;
let palmTreeWidth = 133;
let palmTreeHeight = 133;
let meteorWidth = 5333;
let meteorHeight = 5333;
let explosionWidth = 128;
let explosionHeight = 80;

let idleFrameCount = 10;
let runFrameCount = 8;
let explosionFrameCount = 10;

let dinoX = 30;
let dinoY = 1000;
let dinoSrcX;
let dinoSrcY;

let palmTreeX = 120;
let palmTreeY = 800;

let meteorX = 270;
let meteorY = 900;

let explosionX = 300;
let explosionY = 1100;
let explosionSrcX;
let explosionSrcY;

let dinoCurrFrame = 0;
let explosionCurrFrame = 0;
let idleMode = true;

let canvas = document.getElementById("myCanvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
let ctx = canvas.getContext('2d');

function updateFrame() {
    let frameCount = idleMode ? idleFrameCount : runFrameCount;
    dinoCurrFrame = ++dinoCurrFrame % frameCount;
    dinoSrcX = dinoCurrFrame * dinoWidth;
    dinoSrcY = 0;

    explosionCurrFrame = ++explosionCurrFrame % explosionFrameCount;
    explosionSrcX = explosionCurrFrame * explosionWidth;
    explosionSrcY = 0;

    ctx.clearRect(dinoX, dinoY, dinoWidth, dinoHeight);
    ctx.clearRect(explosionX, explosionY, explosionWidth*4, explosionHeight*4);
}

function drawImage() {
    updateFrame();
    let dinoSprite = idleMode ? idleDinoSprite : runDinoSprite;
    ctx.drawImage(dinoSprite, dinoSrcX, dinoSrcY, dinoWidth, dinoHeight, dinoX, dinoY, dinoWidth, dinoHeight);
    ctx.drawImage(palmTreeSprite, 0, 0, palmTreeWidth, palmTreeHeight, palmTreeX, palmTreeY, palmTreeWidth*5, palmTreeHeight*5);
    ctx.drawImage(palmTreeSprite, 0, 0, palmTreeWidth, palmTreeHeight, palmTreeX, palmTreeY, palmTreeWidth*5, palmTreeHeight*5);
    ctx.drawImage(meteorSprite, 0, 0, meteorWidth, meteorHeight, meteorX, meteorY, meteorWidth*0.125, meteorHeight*0.125);
    ctx.drawImage(explosionSprite, explosionSrcX, explosionSrcY, explosionWidth, explosionHeight, explosionX, explosionY, explosionWidth*4, explosionHeight*4);
}

setInterval(function() {
    drawImage();
}, 100);