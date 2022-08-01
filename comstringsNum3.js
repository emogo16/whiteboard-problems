//Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da



//iterative
function compressing(string){
  let count = 1;
  let answer = "";
  for (let i = 0; i < string.length; i++) {
    if(string[i+1] && string[i] === string[i+1]){
      count++;
    } else {
      if (count > 1){
        answer += count.toString() + string[i];
      } else {
        answer += string[i];
      }
      count = 1;
    }
  }
  return answer;
};

console.log(compressing("aaabccdddda"))


//recursive
function compressingRecursive(string){
  if (string.length === 0)
  return string;
  let count = 1;
  for (let i = 0; string[i] === string[i+1]; i++) count++;
  if (count > 1) {
    return count.toString() + string[0] + compressingRecursive(string.substring(count));
  } else {
    return string[0] + compressingRecursive(string.substring(1));
  }
};

console.log(compressingRecursive("aaabccdddda"));