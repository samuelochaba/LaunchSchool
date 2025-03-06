/*
    GET intArray
    SET result = []

    SET iterator = 0
    WHILE iterator < intArray.length
      result.push(intArray[iterator])

      iterator = iterator + 2
    return result
*/

function everyOtherInt(intArray) {
  const result = [];

  for (let iterator = 0; iterator < intArray.length; iterator += 2) {
    result.push(intArray[iterator]);
  }

  return result;
}

console.log(everyOtherInt([1, 4, 7, 2, 5]));
