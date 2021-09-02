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
    },3000);
}