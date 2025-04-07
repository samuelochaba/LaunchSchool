/* eslint-disable max-lines-per-function */
function adjacentConsonantCount(string) {
  const CONSONANTS = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let stringWithoutSpace = string.replaceAll(" ", "");

  let count = 0;
  let temp = 0;

  for (let itr = 0; itr < stringWithoutSpace.length; itr += 1) {
    if (!CONSONANTS.includes(stringWithoutSpace[itr])) {
      if (temp > 1) {
        count += temp;
      }
      temp = 0;
      continue;
    }
    if (CONSONANTS.includes(stringWithoutSpace[itr])) {
      temp += 1;

      if (itr === stringWithoutSpace.length - 1) {
        count += temp;
      }
    }
  }

  return count;
}

function sortStringsByConsonants(strings) {
  const stringsWithAdjacentConsonantCounts = strings.map((string) => {
    return { key: string, value: adjacentConsonantCount(string) };
  });

  console.log(stringsWithAdjacentConsonantCounts);

  stringsWithAdjacentConsonantCounts.sort((a, b) => b.value - a.value);

  const result = stringsWithAdjacentConsonantCounts.map((item) => {
    return item.key;
  });

  return result;
}

let list1 = ["aa", "baa", "ccaa", "dddaa"];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ["can can", "toucan", "batman", "salt pan"];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ["bar", "car", "far", "jar"];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ["day", "week", "month", "year"];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']
