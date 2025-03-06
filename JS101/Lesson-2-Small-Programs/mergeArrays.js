/*
  GET arr1, arr2
  SET mergedArray = []

  SET i = 0

  WHILE i < arr1.length
    mergedArray.push(arr1[i]);
    mergedArray.push(arr1[i]);
    i += 1;

  return mergedArray

*/
function mergedArray(arr1, arr2) {
  const mergedArray = [];

  for (let iterator = 0; iterator < arr1.length; iterator++) {
    mergedArray.push(arr1[iterator]);
    mergedArray.push(arr2[iterator]);
  }
  return mergedArray;
}

console.log(mergedArray([1, 2, 3], [4, 5, 6]));
