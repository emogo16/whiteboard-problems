// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

function bubSort(array){
  for(let i=0; i<array.length;i++){
    for(let m=0; m<array.length;m++){
      if(array[m]>array[m+1]){
        let temp= array[m];
        array[m]= array[m+1]
        array[m+1]=temp
      } 
    }
  }
  return array;
}

console.log(bubSort([9, 2, 7, 12]));