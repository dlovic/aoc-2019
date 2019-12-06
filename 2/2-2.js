const read = require('file-reader');
const input = read.file('input.txt');

let originalOpcodes = input.split(',').map(x => parseInt(x));

for (let noun = 1; noun < 99; noun++) {
  for (let verb = 1; verb < 99; verb++) {
    let opcodes = [...originalOpcodes];

    opcodes[1] = noun;
    opcodes[2] = verb;

    let pointer = 0;

    while (opcodes[pointer] !== 99) {
      let code = opcodes[pointer];

      let p1 = opcodes[pointer + 1];
      let p2 = opcodes[pointer + 2];
      let p3 = opcodes[pointer + 3];

      if (code == 1) {
        opcodes[p3] = opcodes[p1] + opcodes[p2];
      } else if (code == 2) {
        opcodes[p3] = opcodes[p1] * opcodes[p2];
      }

      pointer += 4;
    }

    if (opcodes[0] === 19690720) {
      console.log(100 * noun + verb);
      return 0;
    }
  }
}
