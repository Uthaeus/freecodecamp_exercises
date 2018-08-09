// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


function sumFibs(num) {
  let result = [1, 1];

  for (var i = 2; i < num; i++) {
    let temp = result[i - 2] + result[i - 1]
    if (temp > num) {
      break;
    }
    result.push(temp);
  }

  result = result.filter(a => a % 2 == 1).reduce((a, b) => a += b);

  return result;
}

console.log(sumFibs(4));
//console.log(sumFibs(4000000)); // should return 4613732)
//console.log(sumFibs(1000)); // should return 1785)
console.log(sumFibs(10)); // 10
console.log(sumFibs(75025)); // should return 135721)