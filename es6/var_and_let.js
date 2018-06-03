// In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite.

// Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.

// A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword.

// If you were to replace var with let in the variable declarations of the code above, the result would be an error.

// let camper = 'James';
// let camper = 'David'; // throws an error
// This error can be seen in the console of your browser.

// So unlike var, when using let, a variable with the same name can only be declared once.

// Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance


var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();