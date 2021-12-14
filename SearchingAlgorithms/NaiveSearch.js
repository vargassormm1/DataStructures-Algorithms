const naiveSearch = (bigString, smallString) => {
  let count = 0;
  for (let i = 0; i < bigString.length; i++) {
    for (let j = 0; j < smallString.length; j++) {
      console.log(smallString[j], bigString[i + j]);

      if (smallString[j] !== bigString[i + j]) {
        console.log("break");
        break;
      }
      if (j === smallString.length - 1) {
        count++;
        console.log(count);
      }
    }
  }
  return count;
};

console.log(naiveSearch("lolielol", "lol"));
