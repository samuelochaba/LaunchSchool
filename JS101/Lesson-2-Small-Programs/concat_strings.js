/*
GET stringsArray
SET result = ""
SET iterator = 0

  WHILE iterator < stringsArray.length
    SET currentString = stringsArray[iterator]
    result = reslut + currentString

    iterator = iterator + 1

  return result
*/

function concatStrings(stringsArray) {
  let reslut = "";

  for (let iterator = 0; iterator < stringsArray.length; iterator++) {
    reslut += stringsArray[iterator];
  }

  return reslut;
}

console.log(concatStrings(["obande ", "is ", "my ", "name"]));
