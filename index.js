const computerPlay = () => {
  const num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const playRound = ( comp, player ) => {
  switch (comp) {
    case 'rock':
      switch (player) {
        case 'rock':
          return 'Tie! Rock vs. Rock';
        case 'paper':
          return 'You lose! Rock vs. Paper';
        case 'scissors':
          return 'You win! Rock vs. Scissors';
      }
    case 'paper': {
      switch (player) {
        case 'rock':
          return 'You lose! Paper vs. Rock';
        case 'paper':
          return 'Tie! Paper vs. Paper';
        case 'scissors':
          return 'You win! Paper vs. Scissors';
      }
    }
    case 'scissors': {
      switch (player) {
        case 'rock':
          return 'You win! Scissors vs. Rock';
        case 'paper':
          return 'You lose! Scissors vs. Paper';
        case 'scissors':
          return 'Tie! Scissors vs. Scissors';
      }
    }
  }
};

const game = () => {
  //Play 5 rounds
  let compScore = 0;
  let playerScore = 0;
  for ( i = 0; i < 5; i++ ) {
    
    const computerSelection = computerPlay();
    const playerSelection = prompt('Choose rock, paper, or scissors:').toLowerCase();
    
    if (playRound(computerSelection, playerSelection).includes('win')) {
      playerScore += 1;
    } else if ( playRound(computerSelection, playerSelection).includes('lose') ) {
      compScore += 1;
    }
  }
  //Tally scores
  if (playerScore > compScore) { return 'You won!' }
  else if ( compScore > playerScore ) { return 'You lost!' }
  else if ( compScore === playerScore ) { return 'Tie!' }
};

console.log(game());