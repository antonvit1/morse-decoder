const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "yyyyy": " ",
};

function decode(expr) {
  // write your solution here
  let size = 10;
  let mas1 = [];
  for (let i = 0; i < expr.length / size; i++) {
    mas1[i] = expr.slice(i * size, i * size + size);
  }

  let mas2 = mas1.map((a, b) => {
    let mas3 = [];
    for (let i = 0; i < a.length / 2; i++) {
      mas3[i] = a.slice(i * 2, i * 2 + 2);
    }
    return mas3;
  });

  let mas5 = mas2.map((c, d) => {
    let mas4 = [];
    for (let i = 0; i < c.length; i++) {
      if (c[i] === "10") {
        mas4.push(".");
      } else if (c[i] === "11") {
        mas4.push("-");
      }else if (c[i] == "**") {
        mas4.push("y");
      }
    }

    return mas4;
  });
  let mas6 = mas5.map((e, f) => e.join(''));
  let mas7 = mas6.map((g) => MORSE_TABLE[g] ).join('');
    return mas7;
}
module.exports = {
  decode,
};
