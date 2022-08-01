//Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

// iterative attempt
function removeSpace(string){
  let newString = "";
  for(let i = 0; i < string.length; i++){
    if(string[i]===" "){
      newString = newString + "%20"
    } else {
      newString = newString + string[i];
    }
  }
  return newString;
};

console.log(removeSpace("Jasmine Ann Jones"));






//recursive
function removeRecursive(string){
  if (string === "") {
    return string;
  } else if (string[0] === " ") {
    return "%20" + removeRecursive(string.substring(1));
  } else {
    return string[0] + removeRecursive(string.substring(1));
  }
};

console.log(removeRecursive("Jasmine Ann Jones"));