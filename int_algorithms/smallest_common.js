// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


function smallestCommons(arr) {
  let small = Math.min(...arr);
  let big = Math.max(...arr);
  let midArr = [];
  let flag = false;

  for (var m = small; m < big; m++) {
    midArr.push(m);
  }

  for (var i = big; flag === false; i += big) {
    if (midArr.every(a => i % a == 0)) {
      return i;
    }
  }
}


console.log(smallestCommons([1,5])); // 60
console.log(smallestCommons([2, 10])); // should return 2520.)