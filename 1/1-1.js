const read = require('file-reader');
const input = read.file('input.txt');

const numbers = input.split('\n').map(x => parseInt(x));

let sum = 0;

numbers.forEach(x => {
  sum += Math.floor(x / 3) - 2;
});

console.log(sum);