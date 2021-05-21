"use strict";
const accountInfo = require('./account');
const walletInfo = require('./wallet');

function validatePin(){
    let prompt = require("prompt-sync")();
    let pinEntry = parseInt(prompt("Please enter your pin to continue."));
    if (pinEntry === accountInfo.pin){
        console.log("Successful pin entry.");
        let prompt = require("prompt-sync")();
    }
    else{
        console.log("Invalid pin entry.");
        validatePin();
    }
    return
};


function getBalance(){
    console.log("Your current balance is $" + accountInfo.bal + ".");
};

function withdraw(){
    let prompt = require("prompt-sync")();
    let withdrawAmount = parseInt(prompt("How much would you like to withdraw?"));
    if(withdrawAmount <= accountInfo.bal){
       accountInfo.bal = accountInfo.bal - withdrawAmount;
       console.log("You withdrew $" + withdrawAmount + " from your bank.");
       console.log("You have $" + accountInfo.bal + " remaining in your bank account");
    }
    else if (withdrawAmount > accountInfo.bal){
        console.log("You can't withdraw more money then you have in your bank.")
        withdraw();
    }
    else{
        console.log("Invalid Withdraw Amount.")
        withdraw()
    }
};

function deposit(){
    let prompt = require("prompt-sync")();
        let depositAmount = parseInt(prompt("How much would you like to deposit?"));
        if(depositAmount <= walletInfo.wallet){
           accountInfo.bal = accountInfo.bal + depositAmount;
           console.log("You have $" + accountInfo.bal + " remaining in your bank account");
           console.log("You deposit $" + depositAmount + " into your bank.");
        }
        else if (depositAmount > walletInfo.wallet){
            console.log("You can't withdraw more money then you have in your wallet.")
            deposit();
        }
        else{
            console.log("Invalid Deposit Amount.")
            deposit();
    }
    return depositAmount;
    
}

module.exports.validatePin = validatePin;
module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;