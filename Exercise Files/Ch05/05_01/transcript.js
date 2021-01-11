for (var i = 0; i < 10; i += 1) {
  console.log(i);
}

// very common use case: looping over an array.

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Statements#for_Statement
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/for

// Webpage forloop!
// shows all pages

var pageNames = [
  "home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog"
  ];
  
  for (i = 0; i < pageNames.length; i += 1) {
  if (document.title === pageNames[i]) {
  console.log("We ARE here: " + pageNames[i]);
  } else {
console.log("We are not here: " + pageNames[i]);
  }
  }

  // shows upto correct page

  var pageNames = [
    "home",
    "About Us",
    "Contact Us",
    "JavaScript Playground",
    "News",
    "Blog"
    ];
    
    for (i = 0; i < pageNames.length; i += 1) {
    if (document.title === pageNames[i]) {
    console.log("We ARE here: " + pageNames[i]);
break;
    } else {
  console.log("We are not here: " + pageNames[i]);
    }
    }
  

    // Another way of writting this exspresstion that is simpilier to read;

    var pageNames = [
      "home",
      "About Us",
      "Contact Us",
      "JavaScript Playground",
      "News",
      "Blog"
      ];
      
      for (i = 0; i < pageNames.length; i += 1) {
    var currentPageTitle = pageNames[i];
    
    if (document.title === currentPageTitle) {
    console.log("We ARE here: " + currentPageTitle);
    } else {
    console.log("We are not here: " + currentPageTitle);
    }
      }

      //Enomarative for loop - create a for in loop, and adds a list number, easier then loop, 
      // but doesn't guarantee 100% that the return of the items will be in number.


  for (var i in pageNames) {
console.log(i, pageNames[i]);
}

var pageNames = [
"Home",
"About Us",
"Contact Us",
"JavaScript Playground",
"News",
"Blog"
];


// Other way (Not used very often, but good to know if it comes up in someones code)

for (var i in pageNames) {
  if (pageNames.hasOwnProperty(i)) {
  console.log(i, pageNames[i]);
  }
  }
  
  var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog"
  ];

// while loop, the below does the same as a for loop (as shown below)

for (i = 0; i < 10; i++) {
  console.log(i + "... this will go until we hit 10")
}

//

var i = 0;
while (i < 10) {
console.log(i + "... this will go until we hit 10");
i += 1;
}

//

while (myItem !== true) {
  console.log("myArray has : " + myArray.length + "items now. This loop will go until we pop a false."
  );
  myItem = myArray.pop();
  } 


  //keeps popping an item out of the myArray and into myItem util its false. looping until get's to a false on the end
// while loops are good when you don't know the content you will loop over, however if it's an infinet amount, it could loop infenetly

// do loops, ensure the code is executed atleast onces before the condition is checked and a while loop takes over;

  var myArray = [false, true, true, true, true, false];

var myItem = null;
while (myItem !== true) {
console.log(
"myArray has " + 
myArray.length +
" items now. This loop will go until we pop false."
);
myItem = myArray.pop();
}


// Functions move tedius parts of code, and only use one reuseable block of code!



function speak() {
  console.log('arf');
  console.log('brf');
  console.log('crf');
  console.log('drf');
  console.log('erf');
  console.log('frf');
  }

speak() // returns;

brf
crf
drf
erf
frf



// Function arguments



function isEven(num) { // declars function isEven(names num)
  if (num % 2 === 0) { // if number is devided by two, does what remains = 0
  return true; } else { return false; // if equal to 0 return true, if not return false
   }}



   // change text


   fuddify("Com here you rabbit");

function fuddify(speech) {
if (typeof speech !== "string") {
console.error("nice, twy, wabbit!");
return;
}
}


// detect data type and check if string, return if true, then replace letters.

fuddify("Come here you horrible rabbit, I'm going to get you and make some rabbit soup"); // declair a argument

function fuddify(speech) { 
if (typeof speech !== "string") {
console.error("nice, twy, wabbit!");
return;
}

speech = speech.replace(/r/g, "w");
speech = speech.replace(/R/g, "w");

return speech;

}

// More Arguments

function // function
anArgument // functionName
(parameter1, Parameter2) // Arguments

anArgument("A string Parameter", "Another string Parameter"); // parameter
