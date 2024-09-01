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
let humanScore = 0;
let computerScore = 0;
// logic for ui
let computerChoice;
const btn = document.querySelector("#Roc");
btn.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    if(computerChoice === 'paper') {
        computerScore++;
        console.log('Rock loses to paper, computer wins this round!');
        outcome = 'Rock loses to paper, computer wins this round!';
        result.textContent = `${outcome}`;
        hCreate.textContent = `Human Score: ${humanScore}`;
        cCreate.textContent = `Computer Score: ${computerScore}`;
}
    else if(computerChoice === 'scissors') {
        humanScore++;
        console.log('Rock beats scissors, you win this round!');
        outcome = 'Rock beats scissors, you win this round!';
        result.textContent = `${outcome}`;
        hCreate.textContent = `Human Score: ${humanScore}`;
        cCreate.textContent = `Computer Score: ${computerScore}`;
}
    else if(computerChoice === 'rock'){
        console.log('It\'s a tie!');
        outcome = "It's a tie!";
        result.textContent = `${outcome}`;
        hCreate.textContent = `Human Score: ${humanScore}`;
        cCreate.textContent = `Computer Score: ${computerScore}`;
    }
    if(computerScore === 5){
        winner.textContent = "Computer Wins!"
        divWin.appendChild(winner);
        computerScore = 0;
        humanScore = 0;
    }
    if(humanScore === 5) {
        winner.textContent = "Human Wins!"
        divWin.appendChild(winner);
        computerScore = 0;
        humanScore = 0;
    }
})


const btn2 = document.querySelector("#Pap");
btn2.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    if(computerChoice === 'rock'){
        humanScore++;
        console.log('Paper beats rock, you win this round!');
        outcome = 'Paper beats rock, you win this round!';
        result.textContent = `${outcome}`;
        hCreate.textContent = `Human Score: ${humanScore}`;
        cCreate.textContent = `Computer Score: ${computerScore}`;
    }
    else if(computerChoice === 'paper'){
        console.log('It\'s a tie!');
        outcome = "It's a tie!";
        result.textContent = `${outcome}`;
        hCreate.textContent = `Human Score: ${humanScore}`;
        cCreate.textContent = `Computer Score: ${computerScore}`;
    }
    else if(computerChoice === 'scissors'){
        computerScore++;
        console.log('Scissors cut paper, computer wins this round!');
        outcome = 'Scissors cut paper, computer wins this round!'
        result.textContent = `${outcome}`;
        hCreate.textContent = `Human Score: ${humanScore}`;
        cCreate.textContent = `Computer Score: ${computerScore}`;
    }
    if(computerScore === 5){
        winner.textContent = "Computer Wins!"
        divWin.appendChild(winner);
        computerScore = 0;
        humanScore = 0;
    }
    if(humanScore === 5) {
        winner.textContent = "Human Wins!"
        divWin.appendChild(winner);
        computerScore = 0;
        humanScore = 0;
    }
})


const btn3 = document.querySelector("#Sci");
btn3.addEventListener('click', () => { //When clicked, outcome is selected and logged
    computerChoice = getComputerChoice();
    if(computerChoice === 'rock'){
        computerScore++;
        console.log('Rock loses to scissors, computer wins this round!');
        outcome = "Rock loses to scissors, computer wins this round!";
        result.textContent = `${outcome}`;
        hCreate.textContent = `Human Score: ${humanScore}`;
        cCreate.textContent = `Computer Score: ${computerScore}`;
    }
    else if(computerChoice === 'paper'){
        humanScore++;
        console.log('Scissors cut paper, you win this round!');
        outcome = "Scissors cut paper, you win this round!";
        result.textContent = `${outcome}`;
        hCreate.textContent = `Human Score: ${humanScore}`;
        cCreate.textContent = `Computer Score: ${computerScore}`;
    }
    else {
        console.log('scissors ties scissors');
        outcome = "It's a tie!";
        result.textContent = `${outcome}`;
        hCreate.textContent = `Human Score: ${humanScore}`;
        cCreate.textContent = `Computer Score: ${computerScore}`;
    }
    if(computerScore === 5){
        winner.textContent = "Computer Wins!"
        divWin.appendChild(winner);
        computerScore = 0;
        humanScore = 0;
    }
    if(humanScore === 5) {
        winner.textContent = "Human Wins!"
        divWin.appendChild(winner);
        computerScore = 0;
        humanScore = 0;
    }
});
let outcome = "";
const cont = document.querySelector("#container");
const result = document.createElement('h1');
result.classList.add('result');
result.textContent = outcome;
cont.appendChild(result); // print result on screen

const hScore = document.querySelector("#scores");
const cScore = document.querySelector("#scores")
const hCreate = document.createElement("h2");
const cCreate = document.createElement("h2");
hCreate.classList.add("score");
cCreate.classList.add("score");
hScore.appendChild(hCreate);
cScore.appendChild(cCreate);
// decide winner
const divWin = document.querySelector("#container");
const winner = document.createElement("h1");


// give gray background to the outcome text when a button is clicked
