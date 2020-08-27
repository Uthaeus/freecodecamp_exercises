
function sym(...args) {
  let possibles = [];
  let final = [];
  let marker;

  for (let x = 0; x < args.length; x++) {
    for (let y = 0; y < args[x].length; y++) {
      marker = true;

      for (let z = 0; z < args.length; z++) {
        if (args[z].includes(args[x][y]) && z !== x) {
          console.log('false', args[x][y]);
          let marker = false;
          console.log(marker);
        }
        if (marker) {
          possibles.push(args[x][y]);
        }
      }
    }
  }

  console.log(possibles)
}

sym([1, 2, 3], [5, 2, 1, 4]); // [3, 4, 5]