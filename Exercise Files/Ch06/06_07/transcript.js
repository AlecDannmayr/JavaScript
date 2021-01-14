var myNum = 32;
var myResult = "Success!";

function randomizer(limit) {
  var randomNumber = Math.floor(Math.random() * limit);

  var myNum = randomNumber;

  console.log("myNum is", myNum);
  console.log("Global myNum is", window.myNum);

  console.log("Our result is", myResult);

  return myNum;
}

randomizer(10);

function doubleIt(num) {
  var myNum = num * 2;

  return myNum;
}

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions#Function_scope


// Simple adding caculator




function addingMachine() {
  var total = 0;
  
  for (var i = 0; i < arguments.length; i += 1) {
  var number = arguments[i];
  

  if (typeof number === "number") {
  total += number;
  }
  }
  return total; 
  }
  



function addingMachine() {
var total = 0;

for (var i = 0; i < arguments.length; i += 1) {
var number = arguments[i];

if (typeof number === "number") {
total += number;
}
}

return total;
}


function addingMachine() {  // creates function
  var total = 0; // initalise a verible 'total' with value of 0
       // varible i initialised equal to i, then for everytime arguments legnth is more then i incriment i by 1 
  for (var i = 0; i < arguments.length; i += 1) { // arguments property creates an array and looks for length of array
  var number = arguments[i]; // verible 'number = argument number
  
  if (typeof number === "number") {  // if number == a numrical number
  total += number; // add totle and number together
  }
  }
  
  return total;
  }
  
  addingMachine(1,2,3);

  function bottle () {
    console.log(arguments[0]);
  }

bottle("string", 6);