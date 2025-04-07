function calculateLeftoverBlocks(numOfBlocks) {
  let blockAmount = numOfBlocks;
  let layer = 1;

  while (true) {
    if (layer * layer === blockAmount) {
      return 0;
    } else if (layer * layer < blockAmount) {
      blockAmount -= layer * layer;
      layer += 1;
    } else {
      return blockAmount;
    }
  }
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
