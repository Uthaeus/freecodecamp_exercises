// var collection = {
//     "2548": {
//       "album": "Slippery When Wet",
//       "artist": "Bon Jovi",
//       "tracks": [ 
//         "Let It Rock", 
//         "You Give Love a Bad Name" 
//       ]
//     },
//     "2468": {
//       "album": "1999",
//       "artist": "Prince",
//       "tracks": [ 
//         "1999", 
//         "Little Red Corvette" 
//       ]
//     },
//     "1245": {
//       "artist": "Robert Palmer",
//       "tracks": [ ]
//     },
//     "5439": {
//       "album": "ABBA Gold"
//     }
// };


// function updateRecords(id, prop, value) {
//   if (value == '') {
    
//     return collection;
//   }
//   if (prop == 'tracks') {
//     if (collection[id].hasOwnProperty('tracks')) {
//       collection[id]['tracks'].push(value);
//     } else {
//       collection[id]['tracks'] = [value];
//     }
//   } else {
//     collection[id][prop] = value;
//   }
  
//   return collection;
// }



// console.log(updateRecords(2548, "tracks", ""));



// var myObj = {
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh"
// };

// function checkObj(checkProp) {
//   // Your Code Here
  
//   if (myObj.hasOwnProperty(checkProp)) {
//     return myObj[checkProp];
//   } else {
//     return "Not Found"
//   }
// }

// // Test your code by modifying these values

// console.log(checkObj("gift"));

// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];


// function lookUpProfile(name, prop){
// // Only change code below this line
//   console.log(contacts[0].firstName)

//   for (var i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop)) {
//       return contacts[i][prop];
//     } else if (contacts[i].firstName == name) {
//       return "No such property";
//     } 
//   }
//   return "No such contact";
// // Only change code above this line
// }

// // Change these values to test your function
// console.log(lookUpProfile("Bob", "number"));


// function convertToInteger(str) {
//   return parseInt(str, 2);
// }

// console.log(convertToInteger("10011"));


// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (books, bookName) {
  let myList = [];
  for (var i = 0; i < books.length; i++) {
    myList.push(books[i]);
  }
  if (!myList.includes(bookName)) {
    myList.push(bookName);
  } 

  return myList;
  
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (books, bookName) {
  let myList = [];
  for (let book in books) {
    myList.push(books[book]);
  }
  return myList.filter(e => e !== bookName);
    // Add your code above this line
  
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log('*****');
console.log(newBookList);
console.log(newerBookList);




















