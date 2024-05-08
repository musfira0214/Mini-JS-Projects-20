const playerScoreEl =document.getElementById('player-score')
const playerChoiceEl =document.getElementById('player-choice')
const computerScoreEl =document.getElementById('computer-score')
const computerChoiceEl =document.getElementById('computer-choice')
const resultText=document.getElementById('resultText')
const playerRock= document.getElementById('player-rock')
const computerRock= document.getElementById('computer-rock')
const playerPaper= document.getElementById('player-paper')
const computerPaper= document.getElementById('computer-paper')
const playerLizard=document.getElementById('player-lizard')
const computerLizard=document.getElementById('computer-lizard')
const playerScissor=document.getElementById('player-scissor')
const computerScissor=document.getElementById('computer-scissor')
const playerSpock=document.getElementById('player-spock')
const computerSpock=document.getElementById('computer-spock')

const allGameIcons= document.querySelectorAll('.fas')

let playerScoreNumber=0;
let computerScorenumber=0;
 
const choices = {
    rock: { name: 'Rock', defeats: ['scissor', 'lizard'] },
    paper: { name: 'Paper', defeats: ['rock', 'spock'] },
    scissor: { name: 'Scissor', defeats: ['paper', 'lizard'] },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
    spock: { name: 'Spock', defeats: ['scissor', 'rock'] },
  };
  
let computerChoice= ' ';
  function resetSelected(){
    allGameIcons.forEach((icon)=>{
      icon.classList.remove('selected')

    })
  }

  // reset
  function resetAll(){
    playerScoreNumber=0;
    computerScorenumber=0;
    playerScoreEl.textContent=playerScoreNumber;
    computerScoreEl.textContent=computerScorenumber;
    playerChoiceEl.textContent= '';
    computerChoiceEl.textContent='';
    resultText.textContent='';
    resetSelected();
  }
  function computerRandomChoice(){
    const computerChoiceNumber =Math.random();
    if(computerChoiceNumber < 0.2){
      computerChoice= 'rock'
    }
    else if(computerChoice <= 0.4){
      computerChoice ='paper';
    }
    else if(computerChoice <= 0.6){
      computerChoice= 'scissor'
    }
    else if(computerChoice <= 0.8){
      computerChoice= 'lizard'
    }
    else{
      computerChoice= 'spock'
    }  
  }
  function displayComputerChoice(){
    switch(computerChoice){
      case 'rock':
        computerRock.classList.add('selected');
        computerChoiceEl.textContent   = ' ---Rock';
        break;
        case 'paper':
        computerPaper.classList.add('selected');
        computerChoiceEl.textContent   = ' ---Paper';
        break;
        case 'scissor':
        computerScissor.classList.add('selected');
        computerChoiceEl.textContent   = ' ---Scissor';
        break;
        case 'lizard':
        computerLizard.classList.add('selected');
        computerChoiceEl.textContent   = ' ---Lizard';
        break;
        case 'spock':
        computerSpock.classList.add('selected');
        computerChoiceEl.textContent   = ' ---Spock';
        break;
        default:
          break;
    }
  }

  function updateScore(playerChoice){
   if(playerChoice === computerChoice){
    resultText.textContent="it's Tie"
   }
    else{
      const choice =choices[playerChoice];
      if(choice.defeats.indexOf(computerChoice) > -1){
        resultText.textContent= "You Won!";
        playerScoreNumber++;
        playerScoreEl.textContent=playerScoreNumber;
       }else{ 
        resultText.textContent= "You lost";
      computerScorenumber++;
      computerScoreEl.textContent=computerScorenumber;

      }
    }
  }
  function checkResult(playerChoice){
    resetSelected()
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);
  }

  function select(playerChoice){
    checkResult(playerChoice)
    switch(playerChoice){
      case 'rock':
        playerRock.classList.add('selected');
        playerChoiceEl.textContent   = ' ---Rock';
        break;
        case 'paper':
        playerPaper.classList.add('selected');
        playerChoiceEl.textContent   = ' ---Paper';
        break;
        case 'scissor':
        playerScissor.classList.add('selected');
        playerChoiceEl.textContent   = ' ---Scissor';
        break;
        case 'lizard':
        playerLizard.classList.add('selected');
        playerChoiceEl.textContent   = ' ---Lizard';
        break;
        case 'spock':
        playerSpock.classList.add('selected');
        playerChoiceEl.textContent   = ' ---Spock';
        break;
        default:
          break;
    }
  }
  // startup
  resetAll();