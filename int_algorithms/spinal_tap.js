// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let strArr = str.replace(/[_-]/g, ' ').split(/(?=[A-Z\s])/).join(' ').replace(/  +/g, ' ').split(' ');
  let result = [];

  for (let word in strArr) {
    result.push(strArr[word].toLowerCase());
  }

  return result.join('-');
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("Teletubbies say Eh-oh")); // should return "teletubbies-say-eh-oh")


// split(/(?=[A-Z_\s])/)