// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.



function pairElement(str) {
  let result = [];

  for (var i = 0; i < str.length; i++) {
    let temp;
    switch(str[i]) {
      case 'A':
        temp = 'T';
        break;
      case 'T':
        temp = 'A';
        break;
      case 'G':
        temp = 'C';
        break;
      case 'C':
        temp = 'G';
        break;
    }
    result.push([str[i], temp]);
  }
  return result;
}

console.log(pairElement("GCG")); // [["G", "C"], ["C","G"],["G", "C"]]
console.log(pairElement("ATCGA")); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]])