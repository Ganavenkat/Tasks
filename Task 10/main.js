const prompt = require('prompt-sync')();

//Users choice
const getUserChoice =(userInput)=>
{
    var choices=["rock","paper","scissor"];
    if(choices.includes(userInput))
    {
        return userInput;
    }
    console.log('Enter correct Value'); 
};

//computer choice
const getComputerChoice=()=>
{
    let num=Math.floor(Math.random()*3);
    if(num==0)return "rock";
    else if(num==1)return "paper";
    else return "scissor";
};

//function to determine winner
function determineWinner(UserChoice,ComputerChoice)
{
    if (UserChoice === ComputerChoice) {
        console.log("The game was a Tie!");
    } 
    else if (UserChoice === "rock") {
        if(ComputerChoice=="paper") {
                return "Computer Won!";
        }
        else return "User Won!";
    } 
    else if (UserChoice === "paper") {
        if(ComputerChoice=="scissor") {
            return "Computer Won!";
        }
        else
            return "User Won!";
    } 
    else if (UserChoice === "scissor") {
        if(ComputerChoice == "rock") {
            return "Computer Won!";
        }
        else
            return "User Won!";
    }
};

function playGame()
{
    let userInput=prompt("Enter your choice: rock or paper or scissor");
    if(userInput=='bomb')console.log("User Wins!");
    else 
    {
        var userChoice=getUserChoice(userInput);
        console.log("User Choice: ", userChoice);
        var computerChoice=getComputerChoice();
        console.log("Computer Choice: ", computerChoice);
        let x=determineWinner(userChoice,computerChoice);
        console.log(`${x}`);
    }
   
};

playGame();
