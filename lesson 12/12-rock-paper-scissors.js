let score=JSON.parse(localStorage.getItem('score'))
|| {
  wins:0,
  losses:0,
  ties:0
};

let isActive=false;
let intervalId;
function autoPlay(){
  if(!isActive){
    intervalId=setInterval(function(){
      const playerMove=pickComputerMove();
      playGame(playerMove);
      
    },1000);
    isActive=true;
  }
  else{
    clearInterval(intervalId);
    isActive=false;
    
  }
}

updateScoreElement();
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "Lose";
    } else if (computerMove === "paper") {
      result = "Win";
    } else if(computerMove==="scissors"){
      result = "Tie";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "Lose";
    } else if(computerMove==="scissors") {
      result = "Won";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "Win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if(computerMove==="scissors"){
      result = "Lose";
    }
  }

  if(result==="Win"){
    score.wins+=1;
  }
  else if(result==="Lose"){
    score.losses+=1;
  }
  else if(result==="Tie"){
    score.ties+=1;
  }

  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML=`You ${result}`;

  document.querySelector('.js-moves').innerHTML=`You
<img src="/icons/${playerMove}-emoji.png" class="move-icon">
<img src="/icons/${computerMove}-emoji.png" class="move-icon">
computer`;

//         alert(
//           `You picked ${playerMove}. Computer picked ${computerMove} . ${result}
// Wins:${score.wins}, Losses:${score.losses}, Ties: ${score.ties}`);
}



function updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`Wins:${score.wins},
   Losses:${score.losses}, Ties: ${score.ties}`;
}



function pickComputerMove() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = "";

  if (randomNumber === 1) {
    computerMove = "rock";
  } else if (randomNumber === 2) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}