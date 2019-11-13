// Write a recursive function, sum(arr, n), that returns the sum of the elements from 0 to n inclusive in an array arr.


function sum(arr, n = 0) {
    if (n <= 0) {
        return arr[0];
    } else {
        console.log(n);
        return sum(arr, n - 1) + arr[n];
    }
}


console.log(sum([1, 2, 3], 2));
console.log(sum([1, 2, 3]))