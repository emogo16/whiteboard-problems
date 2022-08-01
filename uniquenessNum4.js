// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true


function uniqueness(string){
  let score=0;
  for(let i = 0;i<string.length;i++){
    let checker=string[i];
    for(let m = 0;m<string.length;m++){
      if(string[m]===checker){
        score++;
      }
    }
  }
  if(score>string.length){
    return false;
  }else{
    return true;
  }
}

console.log(uniqueness("hello"));