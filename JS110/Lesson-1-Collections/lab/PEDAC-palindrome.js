/* eslint-disable no-trailing-spaces */
/* 
    1. declare a result variable and initialize it to an empty array

    2. create an substrings variable which is an array that contains words 
       from the input string that are at list 2 characters long

          a. declare a result variable and initialize it to an empty array
          b. loop through the input string with the iterator variable i
             the loop should run from the first item to the second to 
             last item
                 create an inner loop with the iterator variable (j) 
                 the loop should run from the current i + 1 to the end
                 of the input string 
                     create a new variable substring
                     compute the substring of the input from (i to j + 1)
                     and assign the substring to the substring variable 
                     push substring to the result array
          c. return result
                    
    3. loop through the substrings array of words
           if the word in the current iteration is a palidrome,
              a. reverse the string
              b. compare the reversed string to the original string
              c. if they are strictly equal, return true, else return false
           push the word to the results array
    4. return the result array
  
 */

function substrings(string) {
  const result = [];

  for (let idx = 0; idx < string.length - 1; idx++) {
    for (let jdx = idx + 1; jdx < string.length; jdx++) {
      let substring = string.slice(idx, jdx + 1);
      result.push(substring);
    }
  }

  return result;
}

function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}

function palindromeSubstrings(input) {
  const result = [];

  const substringsArr = substrings(input);

  substringsArr.forEach((substring) => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
// should return: ["ili"]
//
console.log(palindromeSubstrings("abcddcbA"));
// should return: ["bcddcb", "cddc", "dd"]
//
console.log(palindromeSubstrings("palindrome"));
// should log: []
//
console.log(palindromeSubstrings(""));
// should log: []
