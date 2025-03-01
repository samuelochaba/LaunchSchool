import { question } from "readline-sync";

const SQMETERS_TO_SQFEET = 10.7639;

const inputTypesConversion = {
  feet: (area) => area / SQMETERS_TO_SQFEET,
  meter: (area) => area * SQMETERS_TO_SQFEET,
};

const inputTypes = Object.keys(inputTypesConversion);

let selectedInputType;

while (!inputTypes.includes(selectedInputType)) {
  selectedInputType = question(
    "Enter the input type (Must be meter or feet): "
  ).toLocaleLowerCase();
}

const notSelectedInputType = inputTypes.filter(
  (type) => type !== selectedInputType
)[0];

const length = Number(
  question(`Enter the length of the room in ${selectedInputType}: `)
);

const width = Number(
  question(`Enter the width of the room in ${notSelectedInputType}: `)
);

const area = length * width;
const convertedArea = inputTypesConversion[selectedInputType](area);

console.log(
  `The area of the room is ${area.toFixed(
    2
  )} square ${selectedInputType} (${convertedArea.toFixed(
    2
  )} square ${notSelectedInputType}).`
);
