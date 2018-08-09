// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


function convertHTML(str) {
  // &colon;&rpar;
  let entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }
  let result = '';

  for (var i = 0; i < str.length; i++) {
    if (Object.keys(entities).includes(str[i])) {
      result += entities[str[i]];
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Schindler's List")); // should return Schindler&​apos;s List)


