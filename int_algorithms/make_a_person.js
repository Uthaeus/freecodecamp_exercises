// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.


var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let nameArr = firstAndLast.split(' ');

  this.getFullName = function() {
    return nameArr.join(' ');
  };
  this.getFirstName = function() {
    return nameArr[0];
  };
  this.getLastName = function() {
    return nameArr[1];
  };
  this.setFirstName = function(first) {
    nameArr[0] = first;
  };
  this.setLastName = function(last) {
    nameArr[1] = last;
  };
  this.setFullName = function(firstAndLast) {
    var name = firstAndLast.split(' ');
    nameArr[0] = name[0];
    nameArr[1] = name[1];
  };
};

var bob = new Person('Bob Ross');

console.log(Object.keys(bob).length)

console.log(bob.getFullName());
console.log(bob.getLastName());

bob.setLastName('Jones');
console.log(bob.getLastName());
bob.setFullName('Steve Morgan');
console.log(bob.getFullName());
console.log(bob.getFirstName());