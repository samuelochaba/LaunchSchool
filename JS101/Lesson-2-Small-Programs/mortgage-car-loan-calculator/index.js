/*
  GET loanAmount
    WHILE loanAmount is Invalid
      ask for loanAmount
  GET annualPercentRate
    WHILE annualPercentRate is Invalid
      ask for annualPercentRate
  GET loanDuration
    WHILE loanDuration is Invalid
      ask for loanDuration

  SET monthlyInterestRate = annualPercentRate / 12
  SET loanDurationInMonths = loanDuration * 12

  SET monthlyPayment = SUBPROCESS monthlyPayment
    IF monthlyInterestRate == 0
      m = p / loanDurationInMonths
    ELSE
      m = p * (j / (1 - Math.pow((1 + j), (-n))));

  PRINT monthlyPayment
 */

const readline = require("readline-sync");
const loanMessages = require("./messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

function getValue(message, isInvalid, invalidInputMessage) {
  prompt(message);
  let value = readline.question();

  while (isInvalid(value)) {
    prompt(invalidInputMessage);
    value = readline.question();
  }

  return value;
}

const language = getValue(
  "Welcome to loan calculator, please enter your prefered language (en, fr, esp, ger, ita)",
  (language) =>
    !["en", "fr", "esp", "ger", "ita"].includes(language.toLowerCase()),
  "enter one of en, fr, ger, ita, esp"
);

const MESSAGES = loanMessages[language];
let calculateAnotherLoan;

do {
  const loanAmount = getValue(
    MESSAGES.enterLoanAmount,
    (value) => Number.isNaN(parseFloat(value)) || parseFloat(value) < 1,
    MESSAGES.enterPositiveLoanAmount
  );

  let annualPercentRate = getValue(
    MESSAGES.enterAnnualPercentRate,
    (value) => Number.isNaN(parseFloat(value)) || parseFloat(value) < 0,
    `${MESSAGES.enterNonNegativeAnnPercent} 0`
  );

  annualPercentRate = parseFloat(annualPercentRate) / 100;

  const loanDuration = getValue(
    MESSAGES.enterLoanDuration,
    (value) => Number.isNaN(parseFloat(value)) || parseFloat(value) < 0.001,
    MESSAGES.enterPosLoan
  );

  const monthlyInterestRate = annualPercentRate / 12;
  const loanDurationInMonths = loanDuration * 12;

  let monthlyPayment;

  if (monthlyInterestRate === 0) {
    monthlyPayment = loanAmount / loanDurationInMonths;
  } else if (monthlyInterestRate > 0) {
    monthlyPayment =
      loanAmount *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -loanDurationInMonths)));
  }

  console.log(`${MESSAGES.monthlyPaymentIs} $${monthlyPayment.toFixed(2)}`);

  calculateAnotherLoan = getValue(
    MESSAGES.anotherCalculation,
    (value) => !["y", "n", "Y", "N"].includes(value[0].toLowerCase()),
    MESSAGES.chooseRightOption
  );
} while (calculateAnotherLoan[0].toLocaleLowerCase() === "y");
