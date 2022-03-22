let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const result = document.getElementById("result");
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorChoice = document.getElementById("scissor");
const clearButton = document.getElementById("clear")

function getComputerChoice() {
    const Choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random()*3);
    return Choices[randomNumber];
    
}

function win (){
    userScore++;
    userScore_span.innerHTML = userScore;
    result.innerHTML = ("You win user beats computer")
}


function lost (){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = ("You lost computer beats user!")
}

function tie (){
    result.innerHTML = ("its a draw, try again")
}

function game(userChoise){
    let computerChoice = getComputerChoice();
    switch (userChoise + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win()
            break;
        case "rp":
        case "ps":
        case "sr":
            lost()
            break;
        case "rr":
        case "pp":
        case "ss":
            tie()
            break;
    };
};

function clear(){
    userScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore = 0;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "Result will be shown here, lets go!";
}

// adding event listeners
rockChoice.addEventListener("click", function(){
 game("r")
});

paperChoice.addEventListener("click", function(){
    game("p")
});

scissorChoice.addEventListener("click", function(){
    game("s")
});

clearButton.addEventListener("click", function(){
    clear()
})
