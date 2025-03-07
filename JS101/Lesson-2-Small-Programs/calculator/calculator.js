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
const calculatorMessages = require("./calculator_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function getValue(message, isInvalid, invalidMessage) {
  let value;
  prompt(message);
  value = readline.question();

  while (isInvalid(value)) {
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
      prompt(MESSAGES.enterValidInput);
  }

  prompt(`${MESSAGES.resultIs} ${output}`);
}

function performCalculation() {
  let number1 = getValue(
    MESSAGES.whatIsFirstNumber,
    invalidNumber,
    `Hmm... ${MESSAGES.doesntLookLikeNumber}`
  );

  let number2 = getValue(
    MESSAGES.whatIsSecondNumber,
    invalidNumber,
    `Hmm... ${MESSAGES.doesntLookLikeNumber}`
  );
  let operation = getValue(
    `${MESSAGES.whatOperation}?\n1) ${MESSAGES.add} 2) ${MESSAGES.subtract} 3) ${MESSAGES.multiply} 4) ${calculatorMessages.divide}`,
    (operation) => !["1", "2", "3", "4"].includes(operation),
    `${MESSAGES.pleaseEnter} 1, 2, 3 or 4`
  );

  performOperation(operation, number1, number2);
}
const language = getValue(
  "Please select a language, enter one of english, french, german, spanish, italian (default english)",
  (lang) => false,
  ""
);

const MESSAGES = calculatorMessages[language];

prompt(`${MESSAGES.welcomeToCal}!`);

let anotherCalculation;

do {
  performCalculation();
  anotherCalculation = getValue(
    `${MESSAGES.doYouWantAnotherCal}? (y / n): `,
    (answer) => !["y", "n", "Y", "N"].includes(answer),
    `${MESSAGES.pleaseEnter} Y or N`
  );
} while (anotherCalculation.toLowerCase() === "y");
