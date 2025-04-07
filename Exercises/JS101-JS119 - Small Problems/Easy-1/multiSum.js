/* 
Write a function that computes the sum of all numbers 
between 1 and some other number, inclusive, that are 
multiples of 3 or 5. For instance, if the supplied 
number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Examples:

Copy Code
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

Input: number representing the end of range of multiplication
Output: number representing the sum of all multiples of 3 and 5 between 1 and input number

Rules:
- Exclusive:
    - return the sum of all multiples of 3 and 5 between 1 and input
    - assume that number passes in is an integer greater than 1
  
  Data Structure: number

  Algorithm:
  1. declare and initialize a variable result to 0
  2. loop from 1 to input number 
     a. if the current number is a multiple of 3 or 5, add to result
  3. return result

    Sub problem: isMultipleOfThreeOrFive
      Input: number
      Output: boolean

      Algorithm:
        1. if input % 3 === 0 or input % 5 === 0 return true else false
*/

function isMultipleOfThreeOrFive(number) {
  return number % 3 === 0 || number % 5 === 0;
}

function multisum(number) {
  let result = 0;

  for (let itr = 1; itr <= number; itr++) {
    if (isMultipleOfThreeOrFive(itr)) {
      result += itr;
    }
  }

  return result;
}

multisum(3); // 3
multisum(5); // 8
multisum(10); // 33
multisum(1000); // 234168
