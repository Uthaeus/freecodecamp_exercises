// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
  // I'm a steamroller, baby
  let myArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      myArr = myArr.concat(steamrollArray(arr[i]));
    } else {
      myArr.push(arr[i]);
    }
  }
  return myArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4])
console.log(steamrollArray([[["a"]], [["b"]]])); // should return ["a", "b"])