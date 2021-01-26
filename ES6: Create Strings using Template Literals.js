
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  
  const failureItems = []; // failureItemns is initialized as an empty array
  for(var i= 0;i<arr.length;i++) {  
  failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
// push function will add the string at the end of the array
// backticks are used for wrapping the string
  
  // Only change code above this line
 
  return failureItems;
}

const failuresList = makeList(result.failure);

//                    END
