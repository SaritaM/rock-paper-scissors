let compScore = 0;
let playerScore = 0;
let roundCount = 1;

const playerScoreOutput = document.querySelector('#playerScore');
const compScoreOutput = document.querySelector('#compScore');

const lookupTable = {
  0: 'rock',
  1: 'paper',
  2: 'scissors'
};

const initializeGame = () => {
  compScore = 0;
  playerScore = 0;
  roundCount = 1;

  document.querySelector('.results').classList.remove('active');
  document.querySelector('.button-newGame').classList.remove('active');

  updateScore();
};

const updateScore = () => {
  playerScoreOutput.innerText = playerScore;
  compScoreOutput.innerText = compScore;
}

const computerPlay = () => {
  const num = Math.floor(Math.random() * 3);
  console.log(lookupTable[num]);
  return lookupTable[num];
};

const playerWin = () => {
  playerScore += 1;
  updateScore();
}

const compWin = () => {
  compScore += 1;
  updateScore();
}

function playerPlay(e) {
  let player;

  if (Array.from(this.classList).includes('rock')) { player = 'rock' };
  if (Array.from(this.classList).includes('paper')) { player = 'paper' };
  if (Array.from(this.classList).includes('scissors')) { player = 'scissors' };

  playRound(player);
};

const playRound = (player) => {
  if (roundCount === 1) { document.querySelector('.results').classList.add('active') };
  if (roundCount === 6) { return; }
  const compAns = computerPlay();

  if (compAns === 'rock') {
    if( player === 'paper' ) { playerWin(); } 
    if (player === 'scissors') { compWin(); }
  }
  if (compAns === 'paper') {
    if ( player === 'rock' ) { compWin(); };
    if ( player === 'scissors' ) { playerWin(); };
  }
  if ( compAns === 'scissors' ) {
    if ( player === 'rock' ) { playerWin(); };
    if ( player === 'paper' ) { compWin(); }
  }

  roundCount += 1;
  if (roundCount === 6) { document.querySelector('.button-newGame').classList.add('active') };
  updateScore();
};

// Add event listeners to each weapon
document.querySelectorAll('.weapon').forEach((weapon) => {
  weapon.addEventListener('click', playerPlay);
  // console.log(Array.from(weapon.classList));
});

// Add event listener to button
document.querySelector('.button-newGame').addEventListener('click', initializeGame);

initializeGame();