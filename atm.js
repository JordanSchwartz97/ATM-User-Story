"use strict";
const accountInfo = require('./account')



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









module.exports.validatePin = validatePin;
