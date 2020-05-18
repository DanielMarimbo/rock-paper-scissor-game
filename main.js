var computerPlay = Math.random();

if (computerPlay < .33){
    computerPlay = 'rock';
} else if (computerPlay <= .66) {
    computerPlay = 'paper';
} else {
    computerPlay = 'scissor';
}

function game(){

    let userPlay = prompt("rock, paper or scissor?");

    function playRound(playerSelection, computerSelection){
        if(playerSelection === computerSelection) {
            return "Game was a tie"
        } else if(playerSelection === "rock"){
            if(computerSelection === "paper"){
                return "you lose! paper beats rock"
            } else if(computerSelection === "scissor"){
                return "You win! rock beats scissor"
            }
        } 
        else if(playerSelection==="paper"){
            if(computerSelection==="rock"){
                return "you win! paper beats rock"
            } else if (computerSelection==="scissor"){
                return "you lose! scissor beats paper"
            }
        }
        else if (playerSelection==="scissor"){
            if(computerSelection==="rock"){
                return "you lose! rock beats scissor"
            } else if(computerSelection==="paper"){
                return "you win! scissor beats paper"
            }
        } else{
            return "please enter the right choice"
        }
    }


    console.log(computerPlay)
    console.log(playRound(userPlay, computerPlay));
    
}

console.log(game());
console.log(game());
console.log(game());


