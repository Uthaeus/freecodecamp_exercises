// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.


function permAlone(str) {
  let strArr = str.split('');
  let perms = permutator(strArr);
  let result = [];

  for (let perm in perms) {
    let flag = true;
    for (var i = 0; i < perms[perm].length; i++) {
      if (perms[perm][i] === perms[perm][i + 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(perms[perm]);
    }
  }

  return result.length;
}

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
}

console.log(permAlone('aab')); //2