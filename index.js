
var score1 = 0;
var score2 = 0;
var random1;
var random2;

function reset(){

  location.reload()
}

function play(){
  random1 = Math.ceil(Math.random()*6);
  random2 = Math.ceil(Math.random()*6);

  document.querySelector(".dice1").setAttribute("src", "images/dice" + random1 + ".png");
  document.querySelector(".dice2").setAttribute("src", "images/dice" + random2 + ".png");

  if(random1===random2){
    document.querySelector("h1").innerText = "Draw";
  } else if (random1>random2){
    document.querySelector("h1").innerText = "Player 1 WINS!";
    score1++;
    document.querySelector(".score1").innerText = "Score = " + score1;
  } else {
    document.querySelector("h1").innerText = "Player 2 WINS!";
    score2++;
    document.querySelector(".score2").innerText = "Score = " + score2;
  }
}

var resetButton = document.querySelector(".reset");
resetButton.onclick = reset;

var playButton = document.querySelector(".play");
playButton.onclick = play;
