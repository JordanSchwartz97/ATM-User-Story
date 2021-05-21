"use strict";
const atmInfo = require('./atm');
const walletInfo = require('./wallet')
const accountInfo = require('./account');
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
            console.log("You have $" + walletInfo.wallet + " in your wallet.");
            mainMenu();
        case "quit":
        process.exit();
        default:
            mainMenu();
            
}
}
mainMenu();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
