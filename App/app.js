// add one point to players on button click
var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("reset");
var numb = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

// set game point
var p1Score = 0;
var p2Score = 0;
var winningPoint = 5;
var gameOver = false;

// On button click

p1button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningPoint){
            p1Display.classList.add("green");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
    
});

p2button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningPoint){
            p2Display.classList.add("green");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    gameOver = false;
    p1Display.classList.remove("green");
    p2Display.classList.remove("green");
}

// reset button
resetButton.addEventListener("click", function(){
    reset();
});

// Input WinningPoints for Game
numb.addEventListener("change", function(){
    winningPoint = Number(this.value);
    winningScoreDisplay.textContent = this.value;
    reset();
});