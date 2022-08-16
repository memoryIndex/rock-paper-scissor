function randomNumberGenerator(){
    let randomNumber = Math.floor(Math.random()*10);
    return randomNumber;
}

function getComputerChoice(){
    randomNum = randomNumberGenerator()
    let choices = ["rock","paper","scissor"];
    while (randomNum > 2) {
        randomNum = randomNumberGenerator()
    }

    return choices[randomNum];
}

function playGame(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock" & computerSelection === "scissor"){
        return ("You won, Rock beats Scissor!")
    }
    
    else if(playerSelection ==="rock" & computerSelection === "paper"){
        return ("You lose, Paper beats Rock!")
    }

    else if(playerSelection ==="scissor" & computerSelection === "rock"){
        return ("You lose, Rock beats Scissor!")
    }

    else if(playerSelection ==="scissor" & computerSelection === "paper"){
        return ("You won, Scissor beats Paper!")
    }

    else if(playerSelection ==="paper" & computerSelection === "scissor"){
        return ("You lose, Scissor beats Paper!")
    }

    else if(playerSelection ==="paper" & computerSelection === "rock"){
        return ("You won, Paper beats Rock!")
    }
}

function game(){
    let points = 0;
    for(i=1; i<=5; i++){
        playerSelection = prompt("Your Choice");
        result = playGame(playerSelection, getComputerChoice());
        console.log(result);

        let slicedResult = result.slice(0,5);
        console.log(slicedResult);
        if (slicedResult === "You l"){
            points += 0;
        }
        else if (slicedResult === "You w"){
            points += 1;
        }
    }
    console.log("Your Total score is "+points);
}

game()
