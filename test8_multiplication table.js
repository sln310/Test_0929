// without space
// let result = "x ";
// for (let i = 0; i < 11; i++) {
//   for (let j = 0; j < 11; j++) {
//     if (i == 0 && j > 0) {
//       result += "[" + j + "]";
//     } else if (j == 0 && i > 0) {
//       result += "[" + i + "] ";
//     } else if (i > 0 && j > 0) {
//       result += i * j + " ";
//     }
//   }
//   result += "\n";
// }

// console.log(result);

let result = " x   ";

function space(values) {
  let space = "";
  let pad = 4 - values;
  while (pad-- > 0) space += " ";
  return space;
}

for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 11; j++) {
    if (i == 0 && j > 0) {
      result += "[" + j + "]" + space((j + "").length + 2);
    } else if (j == 0 && i > 0) {
      result += "[" + i + "]";
    } else if (i > 0 && j > 0) {
      result += space((i * j + "").length) + i * j;
    }
  }
  result += "\n";
}

console.log(result);

// function aaa(n) {
//   for (let i = 1; i < n; i++) {
//     let str = "";
//     for (let j = 1; j < n; j++) {
//       str += i * j + "\t";
//     }
//     console.log(str);
//   }
// }

// aaa(11);
