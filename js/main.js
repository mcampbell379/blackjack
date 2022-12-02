"use strict";

let playerScore = 0;
let computerScore = 0;

let playerHand = [];
let computerHand = [];

let playing = false;

//function declarations
function mainMenu(){
    console.log(`Player Score: ${playerScore}\tComputer Score: ${computerScore}\n1. Play Blackjack\n2. Exit Game`);
    return prompt(`Type choice # here:`);
}

function gameMenu(){
    console.log(`1. Hit\n2. Stand\n3. Return to menu`);
    return prompt(`Type choice # here`);
}

//loop to keep printing the menus
while(mainMenu() !== `2`){
    if(mainMenu() === `1`){
        playing = true;
    } else {
        mainMenu();
    }
}

