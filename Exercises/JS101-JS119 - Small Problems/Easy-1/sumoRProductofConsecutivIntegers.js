/* eslint-disable max-lines-per-function */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* 
Write a program that asks the user to enter an integer greater than 0, 
then asks whether the user wants to determine the sum or the 
product of all numbers between 1 and the entered integer, inclusive.

example:
    Please enter an integer greater than 0: 5
    Enter "s" to compute the sum, or "p" to compute the product. s

    The sum of the integers between 1 and 5 is 15.

Input:
- integer greater than 0
- operation (s or p)
Output:
- sum of integers between 1 and input integer, inclusive


Rules:
- Explicit:
  - The input integer should be included in the sumation or 
  multiplication

  Questions:
  - What if the user enters 0 or a negative integer?
  - what is the user enters an operation other than p or s



  Algorithm:
  - prompt the user for an interger greater than zero.
      - keep prompting till the user enters a valid input
  - prompt the user for an operation (s or p).
      - keep prompting till the user enters a valid input
  - initialize a result variable to 0 for sum, or 1 for products
  - create a loop from 1 to input integer
    - for sum, set result to current number + result
    - for product, set result to current number * result
  - log result with a message

      Sub Problem - prompting for input (integer > 0 and operation (s or p))
       - Input: 
       - Message
       - callback that checks for validity of input

       Algorithm:
       1 get value from user
       2 pass value to callback
       3 if callback returns a truthy value, return value, else repeat
 */

function prompt(message, isValid) {
  const readlineSync = require("readline-sync");

  let value = readlineSync.question(message);

  while (!isValid(value)) {
    value = readlineSync.question(`Invalid Value: ${message}`);
  }

  return value;
}

function sumOrProductOfConsecutiveIntegers() {
  let integer = prompt(
    "Enter an integer greater than 0: ",
    (val) => Number(val) > 0
  );

  let operation = prompt(
    `Enter "s" to compute the sum, or "p" to compute the product: `,
    (val) => ["p", "s"].includes(val.toLowerCase())
  ).toLowerCase();

  let result = operation === "s" ? 0 : 1;

  for (let itr = 1; itr <= integer; itr++) {
    if (operation === "s") {
      result += itr;
    } else {
      result *= itr;
    }
  }

  console.log(
    `The ${
      operation === "s" ? "sum" : "product"
    } of the integers between 1 and ${integer} is ${result}.`
  );
}

sumOrProductOfConsecutiveIntegers();
