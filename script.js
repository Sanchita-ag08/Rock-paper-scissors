const input = document.querySelector("#input");
const choices= document.querySelectorAll(".choice");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");
let userScore=0;
let compScore=0;

const drawGame=()=>{
    input.innerHTML="The Game Was Draw.... ";
    input.style.backgroundColor="rgba(0, 0, 0, 0.664)";
}
const gentCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
     return options[randIdx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML= userScore;
        input.innerHTML=`You WON..!!..Your ${userChoice} beats ${compChoice}..`
        input.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerHTML= compScore;
        input.innerText=`You lose..!!..${compChoice} beats ${userChoice}..`
        input.style.backgroundColor="red";
    }

}
const playGame=(userChoice)=>{
    const compChoice = gentCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice ==="paper"?false : true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{

   const userChoice = choice.getAttribute("id");
   playGame(userChoice);
   });
});