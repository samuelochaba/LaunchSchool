/*
  function that determines the index of the 3rd
  occurrence of a given character in a string

  SET count = 0
  GET string, character
  SET iterator = 0

  WHILE iterator < string.length
    IF string[iterator] === character
      IF count < 2
        count += 1
      ELSE
        return iterator
*/
function thirdIndex(string, character) {
  let count = 0;

  for (let iterator = 0; iterator < string.length; iterator++) {
    if (string[iterator] === character) {
      if (count < 2) {
        count += 1;
      } else {
        return iterator;
      }
    }
  }

  return null;
}

console.log(thirdIndex("axbxcdfee", "x"));
