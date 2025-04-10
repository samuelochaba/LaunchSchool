/* 
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, 
which was a leap year. Prior to 1752, they used the Julian Calendar. 
Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous 
exercise to determine leap years both before and after 1752.

Examples:

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

RUles:
- Before, 1752 a year is a leap year if it is divisible by 4

*/
function isLeapYear(year) {
  let result;
  if (year < 1752) {
    result = year % 4 === 0;
  } else {
    result = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  console.log(result);

  return result;
}

isLeapYear(2016); // true
isLeapYear(2015); // false
isLeapYear(2100); // false
isLeapYear(2400); // true
isLeapYear(240000); // true
isLeapYear(240001); // false
isLeapYear(2000); // true
isLeapYear(1900); // false
isLeapYear(1752); // true
isLeapYear(1700); // true
isLeapYear(1); // false
isLeapYear(100); // true
isLeapYear(400); // true
