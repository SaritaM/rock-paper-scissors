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
  let compScore = 0;
  let playerScore = 0;
  for ( i = 0; i < 5; i++ ) {
    
    const computerSelection = computerPlay();
    const playerSelection = prompt('Choose rock, paper, or scissors:').toLowerCase();
    
    if (playRound(computerSelection, playerSelection) === 'player') {
      playerScore += 1;
      console.log(`Round ${i + 1}: You won`);
    } else if ( playRound(computerSelection, playerSelection) === 'computer' ) {
      compScore += 1;
      console.log(`Round ${i + 1}: Computer won`)
    }
  }
  //Tally scores
  if (playerScore > compScore) { return 'You won!' }
  else if ( compScore > playerScore ) { return 'You lost!' }
  else if ( compScore === playerScore ) { return 'Tie!' }
};

console.log(game());