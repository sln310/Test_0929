let input1 = [3, 11, 7, 2, 9, 10];
let input2 = [-1, 110, 1, 1, 0];

function sumArray(values) {
  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum;
}

console.log(sumArray(input1));
console.log(sumArray(input2));
