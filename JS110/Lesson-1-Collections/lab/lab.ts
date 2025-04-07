/* eslint-disable no-trailing-spaces */
/* 
Question
============================================
Imagine a sequence of consecutive even integers begining with two.
The integers are grouped in rows, with the first row containing one integer
The second row, two integers, the third row three integers and so on. Given an 
Integer representing the number of a particular row, return an integer 
representing the sum of all the integers in that row

Algorithm
============================================
Questions:
    - Should the fuction return a new string, or log the new string?
    - What if the string contains just 1 word?
    - What if the string is empty?
    - Will the input always be a string?
Input: string
Output: string (new)

Rules:
    - Explicit: 
        - The new string should be identical to the original string 
          but with every other word removed
    - Implicit:
        - 

Algorithm
============================================
1. declare a variable sum and initialize it to 0
2. create a loop with an iterator i from 1 to rowNumber
      for each iteration, add 2 to result
3. Return result

 */

function cEve(rowNum) {
  let result = 0;
  for (let idx = 1; idx <= rowNum; idx++) {
    result += 2 * idx;
  }

  return result;
}

console.log(cEve(10));
