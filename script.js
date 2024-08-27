// Done - use a function to get the computer choice. use the math.random() somehow
// Done - make it so the computer returns rock paper or scissors
// Done - use a function to get the human choice and make it lowercase or something so its not case sensitive
// Done - create and initialize two variables one being humanScore and the other being computerScore
// Done - create a function to play a round.
// create a playGame function that calls the playRound function 5 times

function getComputerChoice() {
    let gen = Math.random(); //generates random number between 0 and 1
    let timesTen = gen * 100;
    if (timesTen <= 33) {
        return 'rock';
    }
    else if (timesTen > 33 && timesTen <= 67) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}
function getHumanChoice() {
    let choice = prompt('Rock, Paper, or Scissors');
    return choice.toLowerCase();
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    if(humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log('Rock loses to paper, computer wins this round!');
}
    else if(humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log('Rock beats scissors, you win this round!');
}
    else if(humanChoice === 'rock' && computerChoice === 'rock'){
        console.log('It\'s a tie!');
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        console.log('Paper beats rock, you win this round!');
    }
    else if(humanChoice === 'paper' && computerChoice === 'paper'){
        console.log('Paper ties paper');
    }
    else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++;
        console.log('Scissors cut paper, computer wins this round!');
    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore++;
        console.log('Rock loses to scissors, computer wins this round!');
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        console.log('Scissors cut paper, you win this round!');
    }
    else {
        console.log('scissors ties scissors');
    }
}
    function playGame() {
        for(let i = 0; i < 5; i++) {
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
        console.log(`Final score: Human: ${humanScore}, Computer: ${computerScore}`);
    }
    playGame();