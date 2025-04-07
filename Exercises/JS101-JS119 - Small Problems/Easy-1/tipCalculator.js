/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */

/* 
  Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
  The program must compute the tip, and then log 
  both the tip and the total amount of the bill to the console. 
  You can ignore input validation and assume that the user will enter valid positive numbers.

  Input: 
    - bill amount
    - tip rate
  Output: 
    - tip
    - total amount of bill
  
  Rules:
    - Explicit
        - compute the tip
        - log both the tip and the total amount of the bill
  
  Algorithm
    - Get billAmount and convert to number
    - get tipRate and convert to number
    - set tipRate = tipRate / 100
    - set tip = billAmount * tipRate
    - set totalAmount = tip + billAmount
    - log totalAmount and tip

*/

function prompt(message) {
  const readline = require("readline-sync");

  return readline.question(message);
}

function tipCalculator() {
  let billAmount = Number(prompt("Enter bill amount: "));

  let tipRate = Number(prompt("Enter tip rate => "));
  tipRate /= 100;

  let tip = billAmount * tipRate;
  let totalAmount = tip + billAmount;

  console.log("$" + tip.toFixed(2));
  console.log("$" + totalAmount.toFixed(2));
}

tipCalculator();
