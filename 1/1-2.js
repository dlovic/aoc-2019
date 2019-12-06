const read = require('file-reader');
const input = read.file('input.txt');

const numbers = input.split('\n').map(x => parseInt(x));
let sum = 0;

numbers.forEach(x => {
  let req = x;

  do {
    req = Math.floor(req / 3) - 2;

    if (req > 0)
      sum += req;
  } while (req > 0)
});

console.log(sum);

