// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

// Example Output
// -3 Hold
// 5 Bet

// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.

// Count Change  Cards
// +1  2, 3, 4, 5, 6
// 0 7, 8, 9
// -1  10, 'J', 'Q', 'K', 'A'


var count = 0;

function cc(card) {
  // Only change code below this line
  var pluses = [2, 3, 4, 5, 6];
  var zeros = [7, 8, 9];
  var negs = [10, 'J', 'Q', 'K', 'A'];
  if (pluses.includes(card)) {
    count++;
  } else if (negs.includes(card)) {
    count--;
  }
  
  return count > 0 ? `${count} Bet` : `${count} Hold`;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc(2)); 
console.log(cc(3)); 
console.log(cc(7)); 
console.log(cc('K')); 
console.log(cc('A'));