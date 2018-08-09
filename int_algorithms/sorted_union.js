// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.



function uniteUnique(...arr) {
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    let eachArr = arr[i];
    for (var j = 0; j < eachArr.length; j++) {
      if (!result.includes(eachArr[j])) {
        result.push(eachArr[j]);
      }
    }
  }

  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //[1, 3, 2, 5, 4]
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // should return [1, 3, 2, [5], [4]])