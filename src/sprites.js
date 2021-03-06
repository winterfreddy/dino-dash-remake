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

let palmTreeX = 2600;
let palmTreeY = 800;
let palmTreeScale = 5;
let movePalm = false;

let meteorX = 2700;
let meteorScale = 0.125;
let meteorY = 0 - (meteorHeight*meteorScale);
let fallingMeteor = false;

let explosionX = 2700;
let explosionY = 1100;
let explosionSrcX;
let explosionSrcY;
let explosionScale = 4;

let dinoCurrFrame = 0;
let explosionCurrFrame = 0;
let idleMode = true;
let explosion = false;

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
    ctx.clearRect(explosionX, explosionY, explosionWidth*explosionScale, explosionHeight*explosionScale);
    ctx.clearRect(palmTreeX, palmTreeY, palmTreeWidth*palmTreeScale, palmTreeHeight*palmTreeScale);
    ctx.clearRect(meteorX, meteorY, meteorWidth*meteorScale, meteorHeight*meteorScale);
}

function drawImage() {
    updateFrame();
    let dinoSprite = idleMode ? idleDinoSprite : runDinoSprite;
    ctx.drawImage(dinoSprite, dinoSrcX, dinoSrcY, dinoWidth, dinoHeight, dinoX, dinoY, dinoWidth, dinoHeight);

    if(movePalm) palmTreeX -= 25;
    if(palmTreeX < 0) {
        movePalm = false;
        palmTreeX = 2700;
        incrementStrikes(++strikes);
        if(!gameover) renderNewWord();
    }
    ctx.drawImage(palmTreeSprite, 0, 0, palmTreeWidth, palmTreeHeight, palmTreeX, palmTreeY, palmTreeWidth*palmTreeScale, palmTreeHeight*palmTreeScale);
    ctx.drawImage(palmTreeSprite, 0, 0, palmTreeWidth, palmTreeHeight, palmTreeX, palmTreeY, palmTreeWidth*palmTreeScale, palmTreeHeight*palmTreeScale);
    
    if(fallingMeteor) {
        meteorX -= 25;
        meteorY += 50;
    }
    if(fallingMeteor && meteorY > 900) {
        ctx.clearRect(palmTreeX, palmTreeY, palmTreeWidth*palmTreeScale, palmTreeHeight*palmTreeScale);
        fallingMeteor = false;
        explosionX = meteorX - 50;
        meteorX = 2700;
        meteorY = 0 - (meteorHeight*meteorScale);
        movePalm = false;
        palmTreeX = 2700;
        explosion = true;
    }

    ctx.drawImage(meteorSprite, 0, 0, meteorWidth, meteorHeight, meteorX, meteorY, meteorWidth*meteorScale, meteorHeight*meteorScale);

    if(explosion && explosionCurrFrame == 9) {
        ctx.clearRect(explosionX, explosionY, explosionWidth*explosionScale, explosionHeight*explosionScale);
        explosion = false;
        explosionX = 2700;
        renderNewWord();
    }
    ctx.drawImage(explosionSprite, explosionSrcX, explosionSrcY, explosionWidth, explosionHeight, explosionX, explosionY, explosionWidth*explosionScale, explosionHeight*explosionScale);
}

setInterval(function() {
    drawImage();
}, 100);