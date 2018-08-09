// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.


function sumPrimes(num) {
  let primes = [2, 3]

  for (var i = 5; i <= num; i += 2) {
    var isPrime = true;
    for(var j = 0; j < primes.length; j++) {
      if (i % primes[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes.reduce((a, b) => a += b);
}

console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // should return 73156.)