
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
 const [a,b,...arr] = list;
 // First and Second Value of Sorce will be stored to a ,b repectively
 // Rest remaining elements will be stored in arr as an Array 
// ...arr is a rest parameter

  // Only change code above this line
  return arr;// by printing arr, we only print the elements (excluding first and second)
}
const arr = removeFirstTwo(source);




//                      END 
