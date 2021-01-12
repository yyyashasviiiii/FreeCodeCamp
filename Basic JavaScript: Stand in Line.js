function nextInLine(arr, item)
 {
  // Only change code below this line
  arr.push(item);  // push will add the element at the end of array
  var remove = arr.shift(); // shift function returns the removed element
  return remove;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
