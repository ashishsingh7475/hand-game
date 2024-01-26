let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#userScore")
let compScorePara = document.querySelector("#compScore")

const genCompChoice = () => {
    let outcomes = ["rock" , "paper" , "scissors"];
    let randIdx = Math.floor(Math.random()*3);
    return outcomes[randIdx];
};
const showWin = (userWin , userChoice , compChoice)=>{
if (userWin){
    userScore++;
    userScorePara.innerText = userScore;
   msg.innerText = `you win your ${userChoice} beats ${compChoice}` ;  
   msg.style.backgroundColor = "green";
}
else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you loose");   
    msg.innerText = `you loose  ${compChoice} beats your ${userChoice}` ;  
    msg.style.backgroundColor = "red";

}  
}


const playGame = (userChoice) => {
    console.log("user choice=" , userChoice);
    // Generate comp choice 
    const compChoice = genCompChoice();
    console.log("comp choice=" , compChoice);

    if (userChoice === compChoice){
         msg.innerText = "DRAW" ;
         msg.style.backgroundColor = "blue";

    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            // paper , scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // paper , rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin , userChoice , compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});

