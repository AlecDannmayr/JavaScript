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


// Other way

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