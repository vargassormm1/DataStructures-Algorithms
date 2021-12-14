const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(start + end / 2);

  while (start < end) {
    if (num >= arr[mid]) {
      start = mid + 1;
    }

    if (num <= arr[mid]) {
      end = mid - 1;
    }
  }
  if (arr[mid] === num) {
    return mid;
  }
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3));
