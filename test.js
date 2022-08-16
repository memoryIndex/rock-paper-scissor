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
    console.log(randomNum);
    return choices[randomNum];
}

console.log(getComputerChoice())