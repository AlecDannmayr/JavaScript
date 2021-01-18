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


function addingMachine() {   // create a function with a function name and no parameters or arguments
  var total = null;  // initalise a verible with a number or null
      
  for (var i = 0; i < arguments.length; i += 1) {  // cycle through a for loop, initalise i = 0, and for everytime the argument length (1,2,3) is more then 0 i ++
  var number = arguments[i];  // initalise number, number == argument number (1) for first one.
}
  if (typeof number === "number") { 
  total += number; 

  
  return total;

  }
  }
  conole.log(total);
  
  addingMachine(1,2,3);

  function bottle () {
    console.log(arguments[0]);
  }

bottle("string", 6);