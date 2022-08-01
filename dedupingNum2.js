// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]



//iterative
function dedup(array){
  let newArray = [];
  array.forEach(element => {
    if (newArray.includes(element))
    {}
    else
    newArray.push(element);
  });
  return newArray  
}

console.log(dedup([7, 9, "hi", 12, "hi", 7, 53]));




//filter
function dedupFilter(array){
  return array.filter ((element, index) => array.indexOf(element) === index); 
};

console.log(dedupFilter([7, 9, "hi", 12, "hi", 7, 53]));

//recursive
function dedupRecursive(array){
  if(array.length === 0) {
    return "";
  } else {
    final = [];
    let newArray=array.shift();
    position=array.indexOf(newArray);
    if(position != -1){
      array.splice(position, 1);
      array.push(newArray);
    } else{
      final.push(newArray+", ");
    }
    return final + dedupRecursive(array);
  }
}

console.log(dedupRecursive([7, 9, "hi", 12, "hi", 7, 53]));