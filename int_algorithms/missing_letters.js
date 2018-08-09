// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
  let alphs = 'abcdefghijklmnopqrstuvwxyz';
  let ind = alphs.search(str[0]);

  let temp = alphs.substr(ind);
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== temp[i]) {
      return temp[i];
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce")); // 'd'
console.log(fearNotLetter("stvwx")); // should return "u".)
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // should return undefined)