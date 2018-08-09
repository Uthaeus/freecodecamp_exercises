// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.


function translatePigLatin(str) {
  // let tris = ['sch', 'scr', 'shr', 'sph', 'spl', 'spr', 'squ', 'str', 'thr'];
  // let dis = ['bl', 'br', 'ch', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'pl', 'pl', 'pr', 'sc', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr', 'tw', 'wh', 'wr'];
  // let vowels = ['a', 'e', 'i', 'o', 'u'];
  // let doub = str.slice(0, 2);
  // let trip = str.slice(0, 3);

  // if (vowels.includes(str[0])) {
  //   return str + 'way';
  // }
  // if (tris.includes(trip)) {
  //   let temp = str.slice(3);
  //   return temp + trip + 'ay';
  // } else if (dis.includes(doub)) {
  //   let temp = str.slice(2);
  //   return temp + doub + 'ay';
  // } else {
  //   let temp = str.slice(1);
  //   return temp + str[0] + 'ay';
  // }

  let ind = str.search(/[aeiou]/);

  switch(ind) {
    case 0:
      str = str + 'way';
      break;
    case -1:
      str = str + 'ay';
      break;
    default: 
      str = str.substr(ind) + str.substr(0, ind) + 'ay';
  }
  return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("paragraphs")); // should return "aragraphspay".)