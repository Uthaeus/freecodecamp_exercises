// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.


function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  let result = [];

  let inventory = {};
  for (let pair in arr1) {
    inventory[arr1[pair][1]] = arr1[pair][0];
  }

  for (let pair in arr2) {
    if (inventory[arr2[pair][1]]) {
      inventory[arr2[pair][1]] += arr2[pair][0];
    } else {
      inventory[arr2[pair][1]] = arr2[pair][0];
    }
  }

  for (let key in inventory) {
    result.push([inventory[key], key]);
  }

  return result.sort((a, b) => a[1] > b[1]);
    
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
// [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]