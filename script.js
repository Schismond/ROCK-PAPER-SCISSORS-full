
const options = ["rock", "paper", "scissors"];
let Pscore = document.getElementById('player');
let Cscore = document.getElementById('computer');
let pcScore = 0;
let playerScore = 0;
let pcChoice = options[Math.floor(Math.random() * options.length)];
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let roundStatus = document.getElementById('round');
let finalScore = document.getElementById('final');
let playAgain = document.getElementById('restart-game');



playAgain.addEventListener('click',() => location.reload(false));

rock.addEventListener('click',function(){
  let pcChoice = options[Math.floor(Math.random() * options.length)];
if (pcChoice === 'rock'){
  roundStatus.innerText = ('you both choosen rock, it\s a draw');
};
if (pcChoice === 'paper'){
  roundStatus.innerText = ('Pc chosen paper , you lose 😢');
  pcScore++;
  Cscore.innerText = ('pc score : ' + pcScore);
};
if (pcChoice === 'scissors'){
  roundStatus.innerText = ('pc choose scissors , you win 😁');
  playerScore++;
  Pscore.innerText = ('your score : ' + playerScore);
};
gameWinner();

});

paper.addEventListener('click',function(){
  let pcChoice = options[Math.floor(Math.random() * options.length)];
  if (pcChoice === 'paper'){
    roundStatus.innerText = ('you both choosen paper, it\s a draw');
  };
  if (pcChoice === 'scissors'){
    roundStatus.innerText = ('Pc chosen scissors , you lose 😢');
    pcScore++;
    Cscore.innerText = ('pc score : ' + pcScore);
  };
  if (pcChoice === 'rock'){
    roundStatus.innerText = ('pc choose rock , you win 😁');
    playerScore++;
    Pscore.innerText =( 'your score : ' + playerScore);
  };
  gameWinner();
  });

  scissors.addEventListener('click',function(){
    let pcChoice = options[Math.floor(Math.random() * options.length)];
    if (pcChoice === 'scissors'){
      roundStatus.innerText = ('you both choosen scissors, it\s a draw');
    }
    if (pcChoice === 'rock'){
      roundStatus.innerText = ('Pc chosen rock , you lose 😢');
      pcScore++;
      Cscore.innerText = ('pc score : ' + pcScore);
    }
    if (pcChoice === 'paper'){
      roundStatus.innerText = ('pc choose paper , you win 😁 ');
      playerScore++;
      Pscore.innerText =( 'your score : ' + playerScore);
    }
    gameWinner();
    });

  function gameWinner(){
    if(playerScore == 5){
      finalScore.innerText = ('Congratulations YOU WIN 🎉');
      playAgain.innerText = ('play Again');
      console.log('hi');
      document.querySelector('#rock').disabled = true;
      document.querySelector('#paper').disabled = true;
      document.querySelector('#scissors').disabled = true;
    };
    if(pcScore == 5){
      finalScore.innerText = ('Unfortuantely u lost 😭');
      playAgain.innerText = ('play Again');
      console.log('hello');
      document.querySelector('#rock').disabled = true;
      document.querySelector('#paper').disabled = true;
      document.querySelector('#scissors').disabled = true;
    };
  }
