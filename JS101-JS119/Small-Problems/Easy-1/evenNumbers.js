const evenNumbers = () => {
  for (let i = 1; i <= 99; i += 1) {
    if (isOdd(i)) continue;
    console.log(`${i}`);
  }
};

const isOdd = (num) => Math.abs(num) % 2 !== 0;

evenNumbers();
