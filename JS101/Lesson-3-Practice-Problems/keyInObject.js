function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(number) {
  return Number(number) >= 0 && Number(number) <= 255;
}

console.log(isDotSeparatedIpAddress("127.0.0.5"));
