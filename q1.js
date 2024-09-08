/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if either x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
  // Task 1: Add code here
  if (typeof a !== 'number' || typeof b !== 'number') {
    //  block of code to be executed if the condition is false
    return -1
  } else {
    //  block of code to be executed if the condition is true
    return b + ", " + a 
  }
}

// Task 2: Add code here
swap("Apple", 10)
swap(9,17)