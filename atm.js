"use strict";
const accountInfo = require('./account');
const walletInfo = require('./wallet');



function validatePin(){
    let prompt = require("prompt-sync")();
    let pinEntry = parseInt(prompt("Please enter your pin to continue."));
    if (pinEntry === accountInfo.pin){
        console.log("Successful pin entry.");
    }
    else{
        console.log("Invalid pin entry.");
        validatePin();
    }
}

function mainMenu(){
    let prompt = require("prompt-sync")();
    let menu = prompt("What would you like to do?('get balance','withdraw','deposit','quit'");
    switch(menu) {
        case "get balance":
            console.log(accountInfo.bal);
            return mainMenu();
        case "withdraw":
           withdraw();
           
}
}

function withdraw(balance){
    let prompt = require("prompt-sync")();
    let withdrawAmount = parseInt(prompt("How much would you like to withdraw?"));
    if(withdrawAmount <= accountInfo.bal){
       accountInfo.bal = accountInfo.bal - withdrawAmount;
       console.log("You have $" + accountInfo.bal + " remaining in your bank account");
       console.log("You withdrew $" + withdrawAmount + " from your bank.");
       walletInfo.walletWithdrawBalance()
       mainMenu();
    }
    else{
        console.log("You can't withdraw more money then you have in your bank.")
        withdraw();
    }
  
}


module.exports.validatePin = validatePin;
module.exports.mainMenu = mainMenu;