const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (array, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

//4,6,9,1,2,5,3
//4,1,9,6,2,5,3   swapIndex: 1  i = 3
//4,1,2,6,9,5,3   swapIndex: 2  i = 4
//4,1,2,3,9,5,6   swapIndex: 3  i = 6
//3,1,2,4,9,5,6

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
