// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.


function sym(...args) {
  let argArr = [...args];
  let result = [];

  for (var i = 0; i < argArr.length; i++) {
    let newArgs = [argArr.slice(0, i) + argArr.slice(i + 1)];
    for (let el in argArr[i]) {
      for (let arr in newArgs) {
        if (newArgs[arr].includes(argArr[i][el])) {
          break;
        } else if (!result.includes(argArr[i][el])) {
          result.push(argArr[i][el]);
        }
      }
    }
  }
  return result.sort((a, b) => a - b);
}

// console.log(sym([1, 2, 3], [5, 2, 1, 4]));

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // should return [1, 4, 5])