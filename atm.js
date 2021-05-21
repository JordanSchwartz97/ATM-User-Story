"use strict";
const accountInfo = require('./account');
const walletInfo = require('./wallet');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getBalance(){
    console.log("Your current balance is $" + accountInfo.bal + ".");
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let withdrawAmount;
function withdraw(){
    let prompt = require("prompt-sync")();
    withdrawAmount = parseInt(prompt("How much would you like to withdraw?"));
    if(withdrawAmount <= accountInfo.bal){
       accountInfo.bal = accountInfo.bal - withdrawAmount;
       console.log("You withdrew $" + withdrawAmount + " from your bank.");
       console.log("You now have $" + accountInfo.bal + " remaining in your bank account");
       walletWithdrawlBalance();
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
let depositAmount;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function deposit(){
    let prompt = require("prompt-sync")();
        depositAmount = parseInt(prompt("How much would you like to deposit?"));
        if(depositAmount <= walletInfo.wallet){
           accountInfo.bal = accountInfo.bal + depositAmount;
           console.log("You deposit $" + depositAmount + " into your bank.");
           console.log("You have $" + accountInfo.bal + " remaining in your bank account");
           walletDepositBalance();
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function walletDepositBalance(){
    walletInfo.wallet = walletInfo.wallet - depositAmount;
    console.log("You now have $" + walletInfo.wallet + " in your wallet.");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function walletWithdrawlBalance(){
    walletInfo.wallet = walletInfo.wallet + withdrawAmount;
    console.log("You now have $" + walletInfo.wallet + " in your wallet.");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function walletBalance(){
    console.log("You have $" + walletInfo.wallet + " in your wallet.");
}
module.exports.walletBalance = walletBalance;
module.exports.validatePin = validatePin;
module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.walletDepositBalance = walletDepositBalance;
module.exports.walletWithdrawlBalance = walletWithdrawlBalance;