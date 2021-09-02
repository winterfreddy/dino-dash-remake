let chosenWord = "";

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
        idleMode = false;
        chosenWord = getSampleWord();
        document.getElementById('word-prompt').innerHTML = chosenWord;
        document.getElementById('type-input').focus();
        document.addEventListener('keydown', function(e) {
            let input = document.getElementById('type-input').value;
            if(input == chosenWord) console.log('input matches chosen word');
        })
    },3000);
}