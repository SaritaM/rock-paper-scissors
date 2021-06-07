//Initialize game
let compScore = 0;
let playerScore = 0;
let roundCount = 1;



//Player click initiates round
//- round count goes up by 1
//- player choice logged, computer choice computed
//- winner computed
//- winner score adjusted
//- if round count = 6, remove option to play next round, final tally delivered, offer new game


const lookupTable = {
  0: 'rock',
  1: 'paper',
  2: 'scissors'
};

const computerPlay = () => {
  const num = Math.floor(Math.random() * 3);
  return lookupTable[num];
};

const playRound = ( comp, player ) => {
  switch (comp) {
    case 'rock':
      switch (player) {
        case 'rock':
          return 'tie';
        case 'paper':
          return 'computer';
        case 'scissors':
          return 'player';
      }
    case 'paper': {
      switch (player) {
        case 'rock':
          return 'computer';
        case 'paper':
          return 'tie';
        case 'scissors':
          return 'player';
      }
    }
    case 'scissors': {
      switch (player) {
        case 'rock':
          return 'player';
        case 'paper':
          return 'computer';
        case 'scissors':
          return 'tie';
      }
    }
  }
};

const game = () => {
  //Play 5 rounds
  for ( i = 0; i < 5; i++ ) {
    
    const computerSelection = computerPlay();
    // const playerSelection = prompt('Choose rock, paper, or scissors:').toLowerCase();
    const playerSelection = 'rock';
    const roundNum = i + 1;
    
    if (playRound(computerSelection, playerSelection) === 'player') {
      playerScore += 1;
      console.log(`Round ${roundNum}: You won`);
    } else if ( playRound(computerSelection, playerSelection) === 'computer' ) {
      compScore += 1;
      console.log(`Round ${roundNum}: Computer won`)
    } else { console.log(`Round ${roundNum}: Tie!`) }
  }
  //Tally scores
  if (playerScore > compScore) { return 'You won!' }
  else if ( compScore > playerScore ) { return 'You lost!' }
  else if ( compScore === playerScore ) { return 'Tie!' }
};

console.log(game());