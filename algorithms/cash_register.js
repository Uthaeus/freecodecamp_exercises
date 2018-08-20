// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.



function checkCashRegister(price, cash, cid) {
  var change = cash - price;

  let totalCID = Math.round(cid.reduce((a, b) => {
    return a + b[1];
  }, 0.0) * 100) / 100;

  let result = {
    'status': undefined,
    'change': []
  }

  if (change > totalCID) {
    result['status'] = 'INSUFFICIENT_FUNDS';
    return result;
  } else if (change === totalCID) {
    result['status'] = 'CLOSED';
    result['change'] = cid;
    return result;
  } else {
    result['status'] = 'OPEN';
  }

  let pre = [];
  let amounts = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let denoms = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER', 'DIME', 'NICKEL', 'PENNY'];
  let cidAmounts = [];

  for (let pair in cid) {
    cidAmounts.unshift(cid[pair][1]);
  }

  for (var i = 0; i < denoms.length; i++) {
    let tempAmount = 0;

    while (change - amounts[i] >= 0 && cidAmounts[i] > 0) {
      cidAmounts[i] -= amounts[i];
      tempAmount += amounts[i];
      change = Math.round((change - amounts[i]) * 100) / 100;
    }
    if (tempAmount > 0) {
      pre.push([denoms[i], tempAmount]);
    }
  }

  if (change > 0) {
    result['status'] = 'INSUFFICIENT_FUNDS';
    return result;
  }
  result['change'] = pre;

  return result;
}


//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// {status: "OPEN", change: [["QUARTER", 0.5]]}

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]})

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// should return {status: "INSUFFICIENT_FUNDS", change: []})

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); 
// should return {status: "INSUFFICIENT_FUNDS", change: []})

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]})

















