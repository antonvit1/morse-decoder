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
};

function decode(expr) {
  // write your solution here
  let size = 10;
  let mas1 = [];
  for (let i = 0; i < expr.length / size; i++) {
    mas1[i] = expr.slice(i * size, i * size + size);
  }
  console.log(mas1);
  let mas2 = mas1.map((a, b) => {
    let mas3 = [];
    for (let i = 0; i < a.length / 2; i++) {
      mas3[i] = a.slice(i * 2, i * 2 + 2);
    }
    return mas3;
  });
  console.log(mas2);
  // console.log(mas2);
}
module.exports = {
  decode,
};
