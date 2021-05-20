"use strict";
const atmInfo = require('./atm');

let wallet = 1000;


function walletWithdrawBalance(wallet){
  let newWallet = wallet + atmInfo.withdrawAmount;
  wallet = newWallet;
  console.log("You withdrew $" + atmInfo.withdrawAmount + " into your bank account");
}


module.exports.wallet = wallet;
module.exports.walletWithdrawBalance = walletWithdrawBalance;
