"use strict";
const atmInfo = require('./atm');
const accountInfo = require('./account');
const walletInfo = require('./wallet');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

atmInfo.validatePin();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mainMenu(){
    let prompt = require("prompt-sync")();
    let menu = prompt("What would you like to do?('get balance','withdraw','deposit','quit','check wallet'");
    switch(menu) {
        case "get balance":
            atmInfo.getBalance();
            mainMenu();
        case "withdraw":
           atmInfo.withdraw();
           mainMenu();
        case "deposit":
            atmInfo.deposit();
            mainMenu();
        case "check wallet":
            atmInfo.walletBalance();
            mainMenu();
        case "quit":
            console.log("Have a nice day!");
        process.exit();
        default:
            mainMenu();
            
}
}
mainMenu();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
