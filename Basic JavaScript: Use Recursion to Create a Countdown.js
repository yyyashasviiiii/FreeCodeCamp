
// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  }
  else {
    var arr = countdown(n-1);
    arr.unshift(n); // unshift adds element at the beginning of the array
    return arr;
  }

}
console.log(countdown(5));
// Only change code above this line

//          END
