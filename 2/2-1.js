const read = require('file-reader');
const input = read.file('input.txt');

let opcodes = input.split(',').map(x => parseInt(x));

for(let i = 0; i < opcodes.length; i += 4) {
  let code = opcodes[i];

  if (code !== 99) {
    let p1 = opcodes[i+1];
    let p2 = opcodes[i+2];
    let p3 = opcodes[i+3];

    if (code == 1) {
      opcodes[p3] = opcodes[p1] + opcodes[p2];
    } else if (code == 2) {
      opcodes[p3] = opcodes[p1] * opcodes[p2];
    }
  } else {
    console.log(opcodes)
    return 0;
  }
}

console.log(opcodes);