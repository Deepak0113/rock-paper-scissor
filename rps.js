let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const user="user".fontsize(3).sub();
const comp="comp".fontsize(3).sub();

function getComputerChoice(){
    const choices= ['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter=="r") return "Rock";
    if(letter=="p") return "Paper";
    if(letter=="s") return "Scissor";
}

function wins(userChoice, computerChoice){
    const colorChange = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${user} beats ${convertToWord(computerChoice)}${comp}. You win!! 😎`;
    colorChange.classList.add("green-glow");
    setTimeout(() => colorChange.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice){
    const colorChange = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${user} beats ${convertToWord(computerChoice)}${comp}. You lose!! 😭`;
    colorChange.classList.add("red-glow");
    setTimeout(() => colorChange.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice){
    const colorChange = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${user} equals ${convertToWord(computerChoice)}${comp}. Its a draw!! 😕`;
    colorChange.classList.add("gray-glow");
    setTimeout(() => colorChange.classList.remove("gray-glow"), 300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"))

    paper_div.addEventListener('click', () => game("p"))

    scissor_div.addEventListener('click', () => game("s"))
}
main();