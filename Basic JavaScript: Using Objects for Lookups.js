/*  Here is an example of a simple reverse alphabet lookup:

var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"  */ 
 
 // Solution :-
 
 // Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var killua = {
    "alpha": "Adams",

    "bravo": "Boston",
     
    "charlie": "Chicago",
  
    "delta": "Denver",

    "echo": "Easy",

    "foxtrot": "Frank"
  }
  result = killua[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");


//        END
 
 
