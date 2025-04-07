/* eslint-disable no-trailing-spaces */
/* 
Write a function that takes two strings as arguments, 
determines the length of the two strings, 
and then returns the result of concatenating the shorter string, 
the longer string, and the shorter string once again. 
You may assume that the strings are of different lengths.

Examples:

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

Input: two strings
Output: concatenated string

Rules:
- Explicit:
  - Assume the strings are of different lengths

Algorithm:
set a shorterString variable
set a longerString variable
concatenate shorterStringLongerStringShorterString and return
*/

function shortLongShort(string1, string2) {
  let short = string1.length < string2.length ? string1 : string2;
  let long = string1.length > string2.length ? string1 : string2;

  return `${short}${long}${short}`;
}

console.log(shortLongShort("", "xyz"));
