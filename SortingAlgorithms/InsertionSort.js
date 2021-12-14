const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (let j = i - 1; j >= 0 && j > arr[currVal]; j--) {
      arr[j + 1] = arr[currVal];
      arr[j] = currVal;
    }
  }
  return arr;
};

console.log(insertionSort([2, 1, 9, 76, 4]));
