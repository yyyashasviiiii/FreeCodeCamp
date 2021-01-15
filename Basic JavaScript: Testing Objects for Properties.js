/*  Example 

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false   */

// Solution :- 

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  else {
    return "Not Found";
  }
}
// property to be searched is passed in checkProp
// objects are passed in obj
// checkObj is the function here  
// .hasOwnProperty() checks if the given property exists or not, it returns true and false

//      END
