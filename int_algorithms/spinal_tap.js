// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let strArr = str.split(/[\s_-]?=([A-Z])?/);

  return strArr;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("AllThe-small Things"));