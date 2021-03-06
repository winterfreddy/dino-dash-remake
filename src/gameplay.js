let chosenWord = "";
let strikes = 0;
let correctWordCounter = 0;
let gameover = false;

function incrementStrikes(strikeNum) {
    console.log(strikes);
    document.getElementById(`strike-${strikeNum}`).style.color = "red";
    if(strikeNum === 3) {
        gameover = true;
        stopGame();
    }
}

function renderNewWord() {
    idleMode = false;
    movePalm = true;
    chosenWord = getSampleWord();
    document.getElementById('word-prompt').innerHTML = chosenWord;
    document.getElementById('type-input').value = "";
    document.getElementById('type-input').focus();
    document.addEventListener('keydown', function(e) {
        let input = document.getElementById('type-input').value;
        if(input == chosenWord) {
            meteorX = palmTreeX + 100;
            fallingMeteor = true;
            document.getElementById('word-prompt').innerHTML = "";
            document.getElementById('type-input').value = "";
            correctWordCounter += 1;
            document.getElementById('correctNum').innerHTML = correctWordCounter;
        }
    })
}

function startGame() {
    document.getElementById("ready-label").style.display = "block";
    setTimeout(function() {
        document.getElementById("ready-label").style.display = "none";
        document.getElementById("set-label").style.display = "block";
    },1000);
    setTimeout(function() {
        document.getElementById("set-label").style.display = "none";
        document.getElementById("go-label").style.display = "block";
    },2000);
    setTimeout(function() {
        document.getElementById("go-label").style.display = "none";
        renderNewWord();
    },3000);
}

function stopGame() {
    idleMode = true;
    document.getElementById('word-prompt').innerHTML = "";
}