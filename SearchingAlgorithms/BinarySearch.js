const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== num && left <= right) {
    if (num < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  if (num === arr[middle]) {
    return middle;
  } else {
    return -1;
  }
};

console.log(binarySearch([1, 2, 3, 4, 5], 5));

// Shorter Version
// const binarySearch = (arr, num) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);

//   while (arr[middle] !== num && left <= right) {
//     if (num > arr[middle]) left = middle + 1;
//     else right = middle - 1;
//     middle = Math.floor((left + right) / 2);
//   }

//   return arr[middle] === num ? middle : -1;
// };
