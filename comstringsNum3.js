//Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da



//iterative
function compressing(string){                         //function that take string as an argument
  let count = 1;                                      //set count to 1
  let answer = "";                                    //set answer to an empty string 
  for (let i = 0; i < string.length; i++) {           //if the string position i+1 exists  AND if position i and i+1 are the same, the counter goes up by 1. loop starts over.
    if(string[i+1] && string[i] === string[i+1]){     
      count++;                                        //increment count by 1 if duplicate is found
    } else {                                          
      if (count > 1){                                 //set parameter to check if count is greater than 1
        answer += count.toString() + string[i];       //if count is greater than 1 add the value to the variable and assign the result
      } else {
        answer += string[i];                          //Now I am going to add value of string to answer variable
      }
      count = 1;
    }
  }
  return answer;                                      //return answer
};

console.log(compressing("aaabccdddda"))


//recursive
function compressingRecursive(string){                                                      //function that takes string as an argument
  if (string.length === 0)                                                                  //if an empty string is passed in return and when the string becomes empty
  return string;                                                                            //return the string
  let count = 1;                                                                            // set count to 1
  for (let i = 0; string[i] === string[i+1]; i++) count++;                                  // set loop to compare  compare the strings and increment count by 1 if duplicate found
  if (count > 1) {                                                                          //if the count is greater than 1 move on
    return count.toString() + string[0] + compressingRecursive(string.substring(count));    //return count converted to a string while adding value to index/position of 0, call function again passing in count to the string using the substring method
  } else {
    return string[0] + compressingRecursive(string.substring(1));                           //return string starting at index/position 0 and add the value of the function that takes string as an argument 
  }                                                                                         //which I will be using a substring methos with an endpoint of 1
};

console.log(compressingRecursive("aaabccdddda"));