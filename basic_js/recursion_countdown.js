// We have defined a function called countdown with two parameters. The function should take an array in the myArray parameter and append the numbers n through 1 based on the n parameter.
//For example, calling this function with n = 5 will pad the array with the numbers [5, 4, 3, 2, 1] inside of it. Your function must use recursion by calling itself and must not use loops of any kind.


function countdown(myArray, n){
    if (n < 1) {
        return [n];
    } else {
        countdown(myArray, n - 1);
        myArray.unshift(n);
        return myArray;
    }
}


console.log(countdown([], 5));