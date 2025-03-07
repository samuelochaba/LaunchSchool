/*
performCalculation
  GET num1
      validate num1
    GET num2
      validate num2
    GET operation
      validate operation
    SET result = getResult
    PRINT result
GET anotherCalculation
  validate anotherCalculation
DO
  performCalculation
WHILE anotherCalculation === y
END

*/
const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function getValue(message, invalidCondition, invalidMessage) {
  let value;
  prompt(message);
  value = readline.question();

  while (invalidCondition(value)) {
    prompt(invalidMessage);
    value = readline.question();
  }

  return value;
}

function performOperation(operation, number1, number2) {
  let output;
  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
    default:
      prompt("Please enter valid operation");
  }

  prompt(`The result is ${output}`);
}
prompt("Welcome to Calculator!");

function performCalculation() {
  let number1 = getValue(
    "What is the first number!",
    invalidNumber,
    "Hmm... that doesn't look like a valid number."
  );

  let number2 = getValue(
    "What is the second number!",
    invalidNumber,
    "Hmm... that doesn't look like a valid number."
  );
  let operation = getValue(
    "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide",
    (operation) => !["1", "2", "3", "4"].includes(operation),
    "please enter 1, 2, 3 or 4"
  );

  performOperation(operation, number1, number2);
}

let anotherCalculation;

do {
  performCalculation();
  anotherCalculation = getValue(
    "Do you want to perform another calculation? (y / n): ",
    (answer) => !["y", "n", "Y", "N"].includes(answer),
    "please enter Y or N"
  );
} while (anotherCalculation.toLowerCase() === "y");
